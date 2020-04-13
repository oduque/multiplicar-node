const opts = {
    base: {
        demand: true,
        alias: 'b',
        type: 'number'
    },
    limite: {
        alias: 'l',
        default: 10,
        type: 'number'
    }
};

const arvg = require('yargs')
    .command('crear', 'Crea en consola la tabla de multiplicar.', opts)
    .command('listar', 'Imprime en consola la tabla de multiplicar.', opts)
    .help()
    .argv;

module.exports = {
    arvg
}