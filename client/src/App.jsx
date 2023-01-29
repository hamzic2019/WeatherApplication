import React, {useState, memo} from 'react'
import {useQuery} from '@tanstack/react-query';
import Axios from 'axios';
import './App.css';
import Header from './components/Header/Header';
import Display from './components/Display/Display';


const App = () => {
  const [city, setCity] = useState('Sarajevo');
  const [temp, setTemp] = useState('');
  const [info, setInfo] = useState({});

  const {data, refetch, isLoading, status, isFetching, error} = useQuery(
    ["forcast", city],
    () => {
      return Axios.get(`https://weatherapplication-hamzic2019.onrender.com/forcast?city=${city}`)
                  .then(res => res.data);
    },{
      refetchOnWindowFocus: false
    }
  ) 

  return (
    <div className='appWrapper'>
      <Header temp={temp} setCity={setCity} setTemp={setTemp} />
      
      <Display data={data} />
    </div>
  )
}

export default memo(App)