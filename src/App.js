import logo from './logo.svg';
import './App.css';
import HelloWorld from './helloWorld';



function App() {
  let handleClick = () => {
    console.log("Hello World");
    
  }

  return (
    <div>
      <h1>Basic React</h1>
      <HelloWorld/>
      <button onClick={handleClick}>KlcikMe</button>
    </div>
  );
}

export default App;
