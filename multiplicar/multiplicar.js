const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolv, reject) => {

        if (!Number(base)) {
            reject(`El valor ingresado de base: ${base} no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor ingresado de limite: ${limite} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                throw new Error('Error creando el archivo');
            } else {
                resolv(`tablas/tabla-${base}.txt`);
            }
        });

    });

};

let listarTabla = (base, limite = 10) => {

    return new Promise((resolv, reject) => {

        if (!Number(base)) {
            reject(`El valor ingresado de base: ${base} no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor ingresado de limite: ${limite} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        resolv(data);

    });

};

module.exports = {
    crearArchivo,
    listarTabla
}