const fs = require('fs');
const JSONSchemaCompiler = require('json-schema-to-typescript');

JSONSchemaCompiler.compileFromFile('./../../schema.json')
  .then(ts => fs.writeFileSync('./src/index.d.ts', ts))

