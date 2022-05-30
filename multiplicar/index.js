const colors= require ('colors');
const fs = require ('fs'); //importar funciones de Filesystem de nodejs
const {logica} = require ("./logica");

const multiplicar = (base,limite,visualizar) => {
    const resultado = logica(base,limite);

if (visualizar){
    console.log (`============
Tabla del ${base}
============`)    
    console.log (resultado.blue);
}
    
fs.writeFileSync(`tablas/tabla-del-${base}.txt`,resultado);
console.log (`El archivo tabla-del-${base}.txt fue creado`.red)
}

module.exports = {
    multiplicar
}