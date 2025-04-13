let count = 0;

//ui in sync with data
//state is a components internal data
//it keeps on changing

// function outerFunc(outerVar){

//   return function innerFunc(innerVar){
//     console.log('outer :', outerVar);
//     console.log('inner :', innerVar);

//   }
// }

// let closureFunc =   outerFunc('hello');
// closureFunc("World");

// function outerFunc(){

//   let outerVar = 'hello';
//    function innerFunc(innerVar){
//     console.log('outer :', outerVar);
//     console.log('inner :', innerVar);

//   };

//   innerFunc('world');
// }

// outerFunc();

// function createUseState() {
//   let state; //var to store current state values
//   let listeners = [];
//   function useState(intitialValue) {
//     if (state === undefined) {
//       state = intitialValue;
//     }
//     function setState(newState) {
//       //updating the state
//       state = newState;
//       listeners.forEach((listener) => listener(state));
//       render();
//     }

//     listeners.push(setState);
//     return [state, setState];
//   }
//   function render() {
//     console.log("Re - rendering the state,", state);
//   }
//   return useState;
// }

// const useState = createUseState();

// count = 0
// setCount((c) => c++)
// setCount((c) => c++)

