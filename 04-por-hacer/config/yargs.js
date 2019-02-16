const description = { alias: 'd', demand: true, desc: 'Descripción de la tarea por hacer' };

const completed = { alias: 'c', default: true, desc: 'Marca la tarea como pendiente o completada' };

const argv = require('yargs')
    .command('create', 'Descripción de create', description)
    .command('get', 'Listando tareas', description)
    .command('update', 'Descripción de update', description, completed)
    .command('delete', 'Descripción de delete', description)
    .help()
    .argv;


module.exports = { argv };