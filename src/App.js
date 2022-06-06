import logo from './logo.svg';
import './App.css';
import Parent from './components/Parent';

function App() {
  return (
    <div className="App">
      <h1>Props!</h1>
      <p>
        If one component is used inside of another component,
        then those components are now parent and child.
      </p>
      <p>
        The parent component can provide data to the child component.
        In React, these pieces of data are conventionally refered to as 'props'
      </p>
      <p>
        If the value of a prop changes, then the child component will 'react'
        to the changes and update.
      </p>
      <h2>Example:</h2>
      <Parent />

      <br />

      <h2>More Info:</h2>
      <p>
        Any js value can be passed as a prop.
        Numbers, strings, booleans, arrays, objects, and even functions!
      </p>
      <p>
        However, even though a JSX element can be stored as a variable,
        you should not pass JSX elements as props. That is a no-no :(
      </p>
    </div>
  );
}

export default App;
