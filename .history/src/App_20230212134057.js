import './App.css';
import Product from './Product';

function App() {
//Dynamic rendering in React
  const name= null;
  let isProgrammer= false;

  //Counter
  const []

  return (
    <div className="App">
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
