import './App.css';
import Product from './Product';

function App() {

  const name= "React";
  let isProgrammer= false;


  return (
    <div className="App">
     <h1> Hello {isProgrammer ? name : "TodayIsMe"} </h1>
     {name ?}



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
