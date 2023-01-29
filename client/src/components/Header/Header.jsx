import React, {memo} from 'react'
import './Header.css'

const Header = ({temp, setTemp, setCity}) => {
  return (
    <div className='headerWrapper'>

        <input 
            type="text" 
            placeholder='Enter a city' 
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
        />
      <button onClick={() => {
          setCity(temp)
          //refetch()
      }}>GET FORCAST</button>
    </div>
  )
}

export default memo(Header)