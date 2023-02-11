import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [bob, setBob] = useState('');
  console.log('test')

  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }
  const getBob = async () => {
      let res = await fetch('http://localhost:4001/test', requestOptions)
      let json = await res.json();
      console.log(json)
      setBob(json.test)
  }
  return (
    <div className="App">
      <h1>Hello {bob}</h1>
      <button onClick={() => getBob()}></button>
    </div>
  );
}

export default App;
