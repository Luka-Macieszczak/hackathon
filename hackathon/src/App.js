import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState({})
  const [product, setProduct] = useState('')

  
  const getProduct = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: product,
        country: 'Canada'
    })
      
    }

      let res = await fetch('http://localhost:4001/ebay', requestOptions)
      let json = await res.json();
      console.log(json)
      setData(json)
      
  }

  const handleInputProduct = (event) => {
    setProduct(event.target.value)
  }
  return (
    <div className="App">
      <h1>Type in something</h1>
      <input onChange={handleInputProduct} type='text'></input>
      <button onClick={() => getProduct()}>Get Data</button>
      {Object.keys(data).map((key) => {
        return <div >{JSON.stringify(data[key])}</div>
      })}
    </div>
  );
}

export default App;
