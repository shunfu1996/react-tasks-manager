const submitEdits = require ('./Datatest');
const clickEdit = require('./Datatest');
const addItem = require('./Datatest');
const deleteItem = require('./Datatest');

test ('submitEdits function exists', () => {
    expect(typeof submitEdits).toEqual('function');
});

test ('clickEdit function exists', () => {
    expect(typeof clickEdit).toEqual('function');
});

test ('addItem function exists', () => {
    expect(typeof addItem).toEqual('function');
});