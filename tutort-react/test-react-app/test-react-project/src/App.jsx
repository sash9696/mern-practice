import "./App.css";
// import Greetings from './components/Greetings'

// function Greetings(props){

//   console.log('props', props)

//   return <h1>Greetings {props.name}  and i m {props.age} years old!</h1>
// }

// function Greetings({ name, age }) {
//   // const {name, age} = props;

//   console.log(`Greetings rendered`);

//   return (
//     <h1>
//       Greetings {name} and i m {age} years old!
//     </h1>
//   );
// }


App.Greetings = Greetings;



function Greetings() {
  // const {name, age} = props;

  console.log(`Greetings rendered`);

  return (
    <h1>
      Greetings !
    </h1>
  );
}

function App() {
  // vite


  //build tool
  //out of the box features => typescript, jsx, modern js without any extra configurations
  //hot module replacement => instant file changes without refreshing the whole page
  //production build optimization

  function calculateCartTotal(){
    //logic
  }

  console.log(`App rendered`);
  return (
    <>
      <h1>React</h1>
      {/* <App.Greetings name='john' age={20} />
      <App.Greetings />
      <App.Greetings />
      <App.Greetings /> */}

       {/* {App.Greetings()}  //never do this
       {App.Greetings()} */}

    </>
  );
}

export default App;

// Webpack  =>  older tool
//vite parcel all these are alternatives to webpack
