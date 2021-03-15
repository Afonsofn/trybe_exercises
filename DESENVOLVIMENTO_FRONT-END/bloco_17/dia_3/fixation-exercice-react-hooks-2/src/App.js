import { useState, useEffect } from 'react'
import './App.css';



function App() {

  const [number, setNumber] = useState();

  const counter = setInterval(() => {
    numberHandler()
  }, 10000)

  const numberHandler = () => {
    let randomNumber = Math.random() * 10
    console.log(randomNumber)
    setNumber(randomNumber)
  };

  return (
    <div className="App">
      <p>
        {number}
      </p>
    </div>
  );
}

export default App;
