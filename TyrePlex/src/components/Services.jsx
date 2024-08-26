import React from 'react';
import './services.css';

function Services() {
  return (
    <div className='services-main'>
        <h1 style={{margin:"80px",position:"relative",top:"50px"}}>Services offered by this dealer
        </h1>

        <div className='deals-container'>
        <div className='ab'>
        <img
            src='https://cdn.tyreplex.net/images/wheel-alignment-bal.png?tr=w-100'
            alt='Wheel Alignment and Balancing' className='servicephoto'
          /><h1>Wheel Balancing</h1>
          <h1><button className='btn'>BOOK NOW</button></h1>
        </div>



        <div className='ab'>
        <img
            src='https://cdn.tyreplex.net/images/wheel-alignment.png?tr=w-100'
            alt='Wheel Alignment and Balancing' className='servicephoto'
          /><h1>Wheel Balancing</h1>
          <h1><button className='btn'>BOOK NOW</button></h1>
        </div>
    </div>
    </div>
  );
}

export default Services;
