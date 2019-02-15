const fs = require('fs');
const colors = require('colors');

let crearArchivos = () => {
    return new Promise((resolve, reject) => {
        let data = '';
        for (base = 1; base <= 10; base++) {
            for (let i = 1; i <= 10; i++) {
                data += `${base} * ${i} = ${base * i}\n`;
            }
            fs.writeFile(`03-bases-node/tablas/tabla-${base}.txt`, data, (error) => {
                if (error) reject(error)
                else resolve(`tabla-${base}.txt`);
                console.log('Archivo guardado');
            });
            data = '';
        }
    });
}

let listarTabla = (base, limite = 15) => {

    console.log('TABLA DE MULTIPLICAR'.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i}  = ${base * i}`);
    }
}

module.exports = { crearArchivos, listarTabla };