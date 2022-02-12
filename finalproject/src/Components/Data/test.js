<<<<<<< HEAD
const submitEdits = require ('./dataTest');
const clickEdit = require('./dataTest');
const addItem = require('./dataTest');
const deleteItem = require('./dataTest');

test ('submitEdits function exists', () => {
    expect(typeof submitEdits).toEqual('function');
});

test ('clickEdit function exists', () => {
    expect(typeof clickEdit).toEqual('function');
});

test ('addItem function exists', () => {
    expect(typeof addItem).toEqual('function');
});



// var assert = chai.assert,
//     expect = require('../Data/Data');
// describe('The app', function() {
//     describe('this feature', function() {
//         it("is a function", function(){
//             assert.throw(iThrowError(), Error, "Error thrown");
//         });
//     });
// });
=======
const submitEdits = require ('./Datatest');
const clickEdit = require('./Datatest');
const addItem = require('./Datatest');
const deleteItem = require('./Datatest');
>>>>>>> bfbe4649ea7c35894aa8095faa5d9826d2da56e6

test ('submitEdits function exists', () => {
    expect(typeof submitEdits).toEqual('function');
});

test ('clickEdit function exists', () => {
    expect(typeof clickEdit).toEqual('function');
});

test ('addItem function exists', () => {
    expect(typeof addItem).toEqual('function');
});