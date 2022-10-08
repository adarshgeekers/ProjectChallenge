import React from 'react'
import './Cities.css'
import NewYork from '../../Assects/Images/cities/new york.jpg'
import Losang from '../../Assects/Images/cities/losangles.jpg'




const Cities = () => {
  return (
    <div className='cities'>
        <h1>Featured Cities</h1>
        <div className='content'>
            <p>Lorem ipsum dolor sit amet elit, sed do eiusmod tempor</p>
            <div className='link'>
            <a href='#'>Browsse All Locations &#62;</a>
            </div>
            
        </div>
        <div className='images'>
            <div className='image-left'>
                <img src={NewYork} />
                
            </div>
            <div className='image-mid'>
                <img src={Paris} />
                <img src={Miami} />

            </div>
            <div className='image-right'>
                <img src={London} />
                <img src={Losang} />

            </div>
        </div>

    </div>
  )
}

export default Cities
