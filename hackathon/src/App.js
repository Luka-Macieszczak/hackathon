import { useState, useEffect } from 'react';
import ResultCard from './components/ResultCard';
import logo from './logo.svg';
import './App.css';
import tmp from './tmp.json';

function App() {
    const [data, setData] = useState({})
<<<<<<< HEAD
    const [product, setProduct] = useState('')
=======
>>>>>>>

    const getProduct = async () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },

        }

        let res = await fetch('http://localhost:4001/getebay', requestOptions)
        let json = await res.json();
        if(json.body === 'not loaded'){
            setTimeout(() => {
                getProduct()
            }, 1000)
        }
        else{
            setData(json)
            console.log(json)
        }
        
        

    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <div className="App">
<<<<<<< HEAD
=======
            <h2>bandit.</h2>
>>>>>>> a510e88b98573e89c86e6f074bb73d9d11feb11e
            {Object.keys(data).map((key) => {
                return <ResultCard url={data[key].link} price={data[key].price} image={data[key].thumbnail} key={data[key].product_id} name={data[key].name}/>
            })}
        </div>
    );
}

export default App;
