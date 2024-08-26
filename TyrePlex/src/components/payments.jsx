import React from 'react';
import './payment.css';

function Payments() {
  return (
    <div style={{position: "relative",
        top: "150px"}}>
        <h1 style={{position: "relative",left:"100px"}}>Home/ Tyre Dealers/ Tyre Dealers Ghaziabad/ SHREE HEMKUNT TYRES AND SERVICES</h1>
      <div className='payment-main'>
      <h1>Payment Mode</h1>
    <div style={{display:"flex"}}>  
    <div>
        <h1> ✅Deposit to Account</h1>
        <h1> ✅Credit Card/Debit Card</h1>
        <h1> ✅Wallets (PayTM/PhonePe/Amazon etc.)</h1>
    </div>
    <div>
        <h1> ✅Net Banking</h1>
        <h1> ✅UPI</h1>
    </div>
    </div>

      </div>
    </div>
  )
}
export default Payments
