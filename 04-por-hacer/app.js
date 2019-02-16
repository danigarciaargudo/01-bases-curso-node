const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'create':
        let tarea = porHacer.create(argv.description);
        console.log(tarea);
        break;
    case 'get':
        let listado = porHacer.getListado();
        console.log('----POR HACER-----'.green);
        for (let tarea of listado) {

            console.log(tarea.description);
            console.log('Estado: ', tarea.completed);
        }

        console.log('------------------'.green);
        break;
    case 'update':
        let updated = porHacer.update(argv.description, argv.completed);
        console.log(updated);
        break;

    case 'delete':
        let deleted = porHacer.deleteFn(argv.description);
        console.log(deleted);
        break;

    default:
        console.log('Comando no reconocido');
        break;
}