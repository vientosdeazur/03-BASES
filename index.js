const argv = require('yargs/yargs')(process.argv.slice(2)).argv;
const {multiplicar} = require ("./multiplicar")

console.log (argv._);
const base = 4;

multiplicar(base);