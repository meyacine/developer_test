'use strict';

const express = require('express');
const app = express.Router();
const _ = require('underscore');

let STUDENTS = require('../repositories/students').students;

app.get('/', findAll);
app.get('/:id', findOne);
app.post('/', create);
app.put('/:id', update);
app.delete('/:id', remove);

function findAll(req, res) {
    console.log('List all STUDENTS');
    return !STUDENTS || STUDENTS.length === 0 ? res.status(204).json() : res.status(200).json(STUDENTS);
}

function findOne(req, res) {
    const id = getId(req);
    console.log('Get student : id=' + id);
    const person = _.findWhere(STUDENTS, {id: id});
    return !person ? res.status(404).json({error: 'The student with id "' + id + '" does not exist.'}) : res.status(200).json(person);

}

function create(req, res) {
    let student = req.body;
    const {lastname, firstname} = student;
    console.log('Create student : lastname=' + lastname + ', firstname=' + firstname);
    const found = _.findWhere(STUDENTS, {lastname: lastname, firstname: firstname});
    if (found) {
        return res.status(409).json({error: 'The student "' + lastname + ' ' + firstname + '" already exists.'});
    }

    delete student.id;
    student.id = generateId();
    STUDENTS.push(student);
    return res.status(200).json(STUDENTS);7
}

function update(req, res) {
    const id = getId(req);
    console.log('Update student : id=' + id);
    const student = req.body;
    const index = _.findIndex(STUDENTS, function (p) {
        return p.id === id;
    });
    if (index === -1) {
        return res.status(404).json({error: 'The student with id "' + id + '" does not exist.'});
    }
    Object.assign(STUDENTS[index], student);
    return res.status(200).json(STUDENTS);
}

function remove(req, res) {
    const id = getId(req);
    console.log('Delete person : id=' + id);
    const index = _.findIndex(STUDENTS, function (p) {
        return p.id === id;
    });
    if (index === -1) {
        return res.status(404).json({error: 'The person with id "' + id + '" does not exist.'});
    }
    STUDENTS.splice(index, 1);
    return !STUDENTS || STUDENTS.length === 0 ? res.status(204).json() : res.status(200).json(STUDENTS);
}

function getParam(req, param) {
    return req.params[param];
}

function getId(req) {
    return getParam(req, 'id');
}

function generateId() {
    return new Date().getTime()+"";
}

module.exports = app;