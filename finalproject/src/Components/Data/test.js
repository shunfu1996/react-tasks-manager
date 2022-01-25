var assert = chai.assert,
    expect = require('../Data/Data');
describe('The app', function() {
    describe('this feature', function() {
        it("is a function", function(){
            assert.throw(iThrowError(), Error, "Error thrown");
        });
    });
});

// var expect = require('chai').expect;
// const add = require('../Data/Data');
// describe('test', () => {
//     it('should respond 200',function(){
//         assert.throw(deleteItem(), Error, "Error thrown");
//     });
// });



// var expect = require('chai').expect;
// import ('../Data/Data');
// describe('test', handleStatus() => {
//   it('delete button', () => {
//     expect(handleStatus).to.be.equal(setColor("red"));
//   });
// });

// import test from '../Data/Data';

// describe("Test suit", function () {
    
// }


expect(
    Array.isArray(allTasks),
    'The `allTasks` prop passed to `<TasksList />` should be an array after adding a new event',
  ).to.be.true;