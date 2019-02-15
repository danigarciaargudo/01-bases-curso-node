options = {
    base: {
        alias: 'b',
        demand: true
    },
    limite: {
        alias: 'l',
        default: 15
    }
};
const argv = require('yargs')
    .command('listar', 'Descripción de listar', options)
    .help().argv

module.exports = { argv };