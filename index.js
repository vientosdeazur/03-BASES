const argv = require('yargs')

.option ('b', {
    alias:'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
})
.option ('l', {
    alias:'limite',
    type: 'number',
    default: '10',
    demandOption: false,
    describe: 'Es el numero maximo por el cual se va multiplicar'
})

.option ('v', {
    alias: 'visualizar',
    type: 'boolean',
    demandOption: false,
    describe: 'Muestra la tabla creada'
})

.check((argv, options)=> {
    if (isNaN (argv.b) && isNaN (argv.l)){
        throw new Error("El valor ingresado debe ser un número")
    } else {
        return true;
    }


})
.help()
.version ()
.argv;
const {multiplicar} = require ("./multiplicar");


multiplicar(argv.b,argv.l,argv.v);