const { crearArchivos } = require('./multiplicar/multiplicar');

let base;

// RECIBIR ARGUMENTOS DESDE CONSOLA CON PROCESS


crearArchivos()
    .then(archivo => console.log(`Creado el archivo: ${archivo}`))
    .catch(e => console.log(e));