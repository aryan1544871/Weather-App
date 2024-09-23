import React from 'react'
import "./weather.css"
import  search_icon from '../assets/search.png'

function Weather() {
  return (
    <div className='weather'>
      <div className="search-bar">
        <input type="text" placeholder='search' />
        <img src= {search_icon} alt=''></img>
      </div>
    </div>
  )
}

export default Weather
