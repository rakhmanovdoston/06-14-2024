import { useState , useEffect } from 'react'
import './App.css'
import { Context } from './Context';
import RenderCountry from './RenderCountries';

function App() {
  const [countries, setCountries] = useState([]);


  useEffect(() => {
    async function fetchCountries () {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
  
      setCountries(data);
    }
    
    fetchCountries();
  } , []);

  return (
    <div>
      <h1 className='text'>World All Countries!</h1>

      <Context.Provider value={countries}>
        <RenderCountry />
      </Context.Provider>
    </div>
  )
}

export default App
