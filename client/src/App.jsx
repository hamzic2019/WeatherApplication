import React, {useState} from 'react'
import {useQuery} from '@tanstack/react-query';
import Axios from 'axios';

// `

const App = () => {
  const [city, setCity] = useState('Sarajevo');
  const [temp, setTemp] = useState('');

  const {data, refetch, isLoading, status, isFetching} = useQuery(
    ["forcast", city],
    () => {
      return Axios.get(`https://weatherapplication-hamzic2019.onrender.com/forcast?city=${city}`)
                  .then(res => res.data);
    }
  ) 


  return (
    <div>
      <input 
        type="text" 
        placeholder='Enter a city' 
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
      />
      <button onClick={() => {
          setCity(temp)
          refetch()
      }}>GET FORCAST</button>
      <hr />
      <h2>Current temperature: {data?.temp}</h2>
    </div>
  )
}

export default App