const fs = require('fs');
const path = require('path');

/**
 * This script creates an index.ts file in the types directory that exports all
 * types from the files in each subdirectory. This is useful for importing types
 * from the types directory without having to specify the file name, as well as
 * allowing us to export all generated types from the top level package.
 */

const TYPES_DIR = './src/types';

// Get all subdirectories in the types directory
const subDirs = fs
  .readdirSync('./src/types', { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

// Get all files in each subdirectory
const filePaths = new Map();
subDirs.forEach((subDir) => {
  const filesInSubDir = fs.readdirSync(`${TYPES_DIR}/${subDir}`);
  filesInSubDir.forEach((file) => {
    const name = path.basename(file, '.ts');
    const filePath = `./${subDir}/${path.basename(file, '.ts')}`;
    if (!filePaths.has(name)) filePaths.set(name, filePath);
  });
});

// Create index.ts file in types directory exporting all types from the files
// in each subdirectory
let content = '';
for (const filePath of filePaths.values()) {
  content += `export * from '${filePath}';\n`;
}

fs.writeFileSync(`${TYPES_DIR}/index.ts`, content);
