// Original file: protos/signrpc/signer.proto


export interface InputScriptPartial {
  'witness'?: (Buffer | Uint8Array | string)[];
  'sigScript'?: (Buffer | Uint8Array | string);
}

export interface InputScript {
  'witness': (Buffer)[];
  'sigScript': (Buffer);
}
