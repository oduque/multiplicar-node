const arvg = require('./config/yargs').arvg;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//let base = 10;
//console.log(module);
//console.log(process);
//console.log(process.argv);

//let parametro = arvg[2];
//let base = parametro.split('=')[1];

//console.log(arvg);

let comando = arvg._[0];

let base = arvg.base;
let limite = arvg.limite;

switch (comando) {
    case 'crear':
        if (!isNaN(base) && !isNaN(limite)) {
            crearArchivo(base, limite)
                .then(archivo => console.log(`Archivo creado: `.inverse, `${archivo}`.green))
                .catch(error => console.log(error));
        } else {
            console.log('El valor de base y limite deben de ser numeros');
        }
        break;
    case 'listar':
        if (!isNaN(base) && !isNaN(limite)) {
            console.log('==============================='.green);
            console.log(`       TABLA DEL ${base}`.green);
            console.log('==============================='.green);

            listarTabla(base, limite)
                .then(resultado => console.log(resultado))
                .catch(error => console.log(error));
        } else {
            console.log('El valor de base y limite deben de ser numeros');
        }

        break;
    default:
        console.log('Comando no reconocido');
        break;
}