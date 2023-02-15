import { useState } from 'react';
import './App.css';
import Product from './Product';
import "./App.css";
function App() {
//Dynamic rendering in React
  const name= null;
  let isProgrammer= false;

  //Counter
  const [counter, setCounter]=useState(0);

  return (
    <div className="App">
      <button onClick={()=> useState(-6)}>+</button>
      <h1>{counter}</h1>
      <button>-</button>
     <h1> Hello {isProgrammer ? name : "TodayIsMe"} </h1>
     {name ?(
      <>Testing</>
     ):(
      <>
      <h1>Welcome back</h1>
      <h2>Yes, am a programmer!</h2>
      </>
     )}



      {/* < Product
      name='Phone'
      description='Samsung'
      price='4300'
      />
      < Product
      name='Laptop'
      description='Mac'
      price='24000'
      />
      < Product
      name='Woofer'
      description='Vitron'
      price='2300'
      /> */}

    </div>
  );
}

export default App;
