const fs = require ('fs'); //importar funciones de Filesystem de nodejs
const {logica} = require ("./logica");

const multiplicar = (base,limite,visualizar) => {
    const resultado = logica(base,limite);

if (visualizar){
    console.log (`============
    Tabla del ${base}
    ============`)    
    console.log (resultado);
}
    
fs.writeFileSync(`tablas/tabla-del-${base}.txt`,resultado);
}

module.exports = {
    multiplicar
}