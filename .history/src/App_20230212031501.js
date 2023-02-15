import './App.css';
import Product from './Product';

function App() {
  const name= "React";
  let isProgrammer= true;
  return (
    <div className="App">
     <h1> Hello {isProgrammer ? name ? : } </h1>
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
