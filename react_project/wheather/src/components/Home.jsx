import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
const Home = () => {
    const { state } = useLocation()
    const navigate = useNavigate();
    if(!state){
        return(
            <div>
                <p>No weather data found</p>
                <button onClick={()=>navigate('/')}>Search again</button>
            </div>
        )
    }
    const {current} =state;
  return (
    <div>   
        <h2>Weather</h2>
        <p>Temperature : {current.temperature_2m} </p>
        <p>
        Feels like: {current.apparent_temperature}°C
      </p>

      <p>
        Humidity: {current.relative_humidity_2m}%
      </p>

      <p>
        Wind speed: {current.wind_speed_10m} km/h
      </p>

      <p>
        Precipitation: {current.precipitation} mm
      </p>
      <button onClick={()=>navigate('/')}>Search another place</button>
    </div>
  )
}

export default Home