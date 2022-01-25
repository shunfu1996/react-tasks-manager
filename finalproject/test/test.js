var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

expect(
  Array.isArray(allTasks),
  'The `allTasks` prop passed to `<TasksList />` should be an array after adding a new event',
).to.be.true;
// const Todos = require('../src/Components/Data/Data');
// const assert = require('assert').strict;

// describe("Data", function() {
//     it("deleteItem", function() {
//         // [Test Code]
//         let Todos = new Todos();
//         assert.notStrictEqual(todos.list().length, 1);
//     });
// });

// const assert = require("assert");
// const {
//   Task
// } = require("../src/Components/Task/Task");

// describe("task", function () {
//   let db;
//   before((done) => {
//     db = initDB(':memory:');
//     db.serialize(async function() {
//       await dropTable(db);
//       await createTable(db);
//       done();
//     });
//   });

//   it("should insert and fetch a user", async () => {
//     const name = "mocha";
//     // const email = "mocha@test.com";

//     await insertUser( CardData, deleteTask, submittingStatue );
//     const user = await getUsersByName(db, name);
//     assert.deepEqual(user, [{name, description, assignedTo, dueDate, id}]);
//   });

//   after(() => {
//     closeDBPool(db);
//   });
// });





// describe('addItem(e)', function() {
//   const testAdd = ({add, submittingStatue}) =>
//     function() {
//       const res = add(args);
//       submittingStatue.current = true ;
//       assert.strictEqual(res, expected);
//     };

//   it('correctly adds 2 args', testAdd({args: (prevData)}));
// });



// const Date = require("../src/Components/Date/Date");
// const newDate = Date();

// describe("Test deletItem", function() {
//   it("Test deletItem", function() {
//     newDate.deleteItem(prev.filter(item => item.id !== id))
//   })
// });
