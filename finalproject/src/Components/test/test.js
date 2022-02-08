import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Data from '../Data/Data';

describe('Test <Data />', () => {
    // 每次測試後將 render 的 DOM 清空
    afterEach(cleanup);
    test('測試是否正常 render ', () => {
      // render Component
      const { getByTestId, getByText, container, } = render(<Data/>);
      expect(getByTestId('Task Name:').textContent).toBe('School');
      expect(getByText('School').textContent).toBe('School');
      expect(container.querySelector('span').innerHTML).toBe('School');
    });
});



// const shallow = require('enzyme/shallow');
// const rewire = require('rewire');

// describe('', function () {
//     let appModule;
//     try {
//       appModule = rewire('./src/Components/App/App.js');
//     } catch (e) {
//       expect(
//         true,
//         'Try checking your code again. You likely have a syntax error.',
//       ).to.equal(false);
//     }
//     const AppFunction = appModule.__get__('AppFunction');
  
//     it('', function () {
//       let wrapper;
//       try {
//         wrapper = shallow(<App />);
//       } catch (e) {
//         expect(
//           false,
//           "Check for errors in your `AppFunction` component, it isn't rendering",
//         );
//       }

//       expect(
//         typeof wrapper.find('Card').prop('addItem'),
//         'Your `AppFunction()` should render `<NewTask />`, passing a function as its `handleSubmit` prop',
//       ).to.equal('function');

//     })
// })



// import addItem from './Card';

// test("test", ()=>{
//   const inputObject = [ 
//     {name: "Tom", assignedTo: "School"}, 
//     {name: "May", assignedTo: "School"}, 
//   ]

//   const expectedValue = ["Tom", "May"];

//   const actualValue = addItem(inputObject)

//   expect(actualValue).toEqual(expectedValue)
// })