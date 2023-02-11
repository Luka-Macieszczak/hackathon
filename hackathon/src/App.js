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
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {bob} <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => getBob()}>Test</button>
        <div>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bob
        </a>
      </header>
    </div>
  );
}

export default App;
