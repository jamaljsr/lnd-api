import { readFile } from 'node:fs/promises';

const regex =
  /\/\*(?<comment>[\w\W]+?(?=\*\/))\*\/\s+rpc (?<name>\w+)\s+\((?<request>[\w|\s]+)\)\s+returns\s+\((?<response>[\w|\s|.]+)\)/gm;

// A helper script to extract API methods from a proto file and generate a TypeScript
// functions for each RPC method.
const main = async () => {
  const filePath = process.argv[2]; // 'protos/routerrpc/router.proto';
  const file = await readFile(filePath, 'utf-8');
  let match = file.match(
    /service (?<name>\w+) \{(?<body>[\s\S]*?)\}\s+message/
  );
  if (!match?.groups?.name) throw new Error(`Service not found in ${filePath}`);

  let m: RegExpExecArray | null;
  let output = '';
  while ((m = regex.exec(match.groups.body)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    let { comment, name, request, response } = m.groups || {};

    const lname = name[0].toLowerCase() + name.slice(1);
    const jsdoc =
      comment
        .trim()
        .split('\n')
        .map((c) => ` * ${c.trim()}`)
        .join('\n') + '\n';

    output += `/**\n`;
    output += jsdoc;
    output += ` */\n`;

    if (response.startsWith('stream ')) {
      response = response.slice(7);
      if (request.startsWith('stream ')) {
        request = request.slice(7);
        output += `${lname}(): ClientDuplexStream<RPC.${request}Partial, RPC.${response}> {\n`;
        output += `  return this.client.${name}();\n`;
        output += `}\n\n`;
      } else {
        output += `${lname}(request: RPC.${request}Partial = {}): ClientReadableStream<RPC.${response}> {\n`;
        output += `  return this.client.${name}(request);\n`;
        output += `}\n\n`;
      }
    } else {
      output += `async ${lname}(request: RPC.${request}Partial = {}): Promise<RPC.${response}> {\n`;
      output += `  return promisify(this.client.${name}.bind(this.client))(request);\n`;
      output += `}\n\n`;
    }
  }
  console.log(output);
};

main();
