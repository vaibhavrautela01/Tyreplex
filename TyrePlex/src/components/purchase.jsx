import React from 'react';
import './purchase.css';
import Secure from '../assets/shield.png';
import Paypal from '../components/paypalbtn';

function Purchase() {
  return (
    <>
      <div className='purchase-main'>
        <div className='purchase-ab'>
          <div className='secure-container'>
            <img src={Secure} alt="Secure" />
            <div className='text'>
              <h1 style={{color:"white"}}>5 Year Warranty</h1>
            </div>
          </div>

          <h1 style={{color:"purple"}}>apollo</h1>
          <h1>AMAZER 4G LIFE</h1>

          <h1>145/80 R12</h1>

          <h1>₹3,136</h1>

          <div className='paypal'><Paypal/></div>
          <h1 style={{color:"green"}}>OFFER AVAILABLE</h1>

          <h1>TUBELESS</h1>

          <div className="rating text-xl">
            <span className="rating-star text-3xl">4.9</span>
            <span className="rating-star text-3xl">★</span>
            <span className="rating-star text-3xl">★</span>
            <span className="rating-star text-3xl">★</span>
            <span className="rating-star text-3xl">★</span>
            <span className="rating-count ml-4">2278 Reviews</span>
            <button className="rating-button text-lg">Rate</button>
          </div>

          <h1>ADDRESS:</h1>
          <p className='text'>
            No. 9 to 11, KIADB Industrial Area <br/>
            Balagaranahalli, Anekal Taluk, Attibele, <br/>
            Bengaluru, Karnataka, 562107
          </p>
        </div>
      </div>
    </>
  );
}

export default Purchase;
