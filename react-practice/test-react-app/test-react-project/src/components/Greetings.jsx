

function Greetings({ name, age }) {
  // const {name, age} = props;

  console.log(`Greetings rendered`)

  return (
    <h1>
      Greetings {name} and i m {age} years old!
    </h1>
  );
};

export default Greetings;
