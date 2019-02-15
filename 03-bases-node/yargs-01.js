const argv = require('./yargs/yargv').argv;
const colors = require('colors');

const { crearArchivos, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
}



console.log('Base:', argv.b);
console.log('Límite:', argv.l);