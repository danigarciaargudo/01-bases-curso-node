const fs = require('fs');
const colors = require('colors');


let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (error) => {
        if (error) throw new Error('No se ha podido guardar');
    })
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

    return listadoPorHacer;
}

const create = (description) => {

    cargarDB();

    let porHacer = { description, completed: false };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const update = (description, completed = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.description === description);

    if (index >= 0) {
        listadoPorHacer[index].completed = completed;
        guardarDB();
        return true;
    } else {
        return false;
    }
}
const deleteFn = (description) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.description === description);
    // listadoPorHacer[index].splice(index, 1);
    let listadoTemp = listadoPorHacer.filter(tarea => {
        return tarea.description !== description
    });

    if (listadoPorHacer.length === listadoTemp.length) {
        return false;
    } else {
        listadoPorHacer = listadoTemp;
        guardarDB();
        return true
    }
}

module.exports = { create, getListado, update, deleteFn }