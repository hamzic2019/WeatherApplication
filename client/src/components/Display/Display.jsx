import React, {memo} from 'react'
import './Display.css';

const Display = ({data}) => {

  return (
    <div className='displayWrapper'>
        <h1 className='displayWrapperH1'>Today Forcast</h1>
        <img 
            src={`//openweathermap.org/img/wn/${data?.icon}@4x.png`} 
            alt="Weather icon" 
            className='displayWrapperIcon'
        />
        {data && <h3 className='displayWrapperCurrentTemp'>{data.temp}°C</h3>}
        <p></p>
    </div>
  )
}


Display.defaultProps = {
    temp: 0
}

export default memo(Display)