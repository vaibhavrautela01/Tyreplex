import React from 'react';
import Insta from '../assets/instagram.png';
import Email from '../assets/email.png';


function Footer() {
  return (
    <div>
    <footer className="mt-2 bg-black w-full mx-auto" style={{marginTop:"300px"}}>
        <div className="flex justify-between items-center p-4 ">

          <div className="flex-grow flex-shrink text-center space-y-2" style={{margin:"200px"}}> 
            <h1 className="text-white text-8xl">TYRE-PLEX</h1>

            <div className="flex items-center justify-center space-x-4">
              <a href="#" className="flex items-center space-x-2">
                <img src={Email} alt="user" className="w-15 h-15"/>
                <span className="text-white">Email</span>
              </a>

              <a href="#" className="flex items-center space-x-2">
                <img src={Insta} alt="user" className="w-15 h-15"/>
                <span className="text-white">Instagram</span>
              </a>
            </div>
          </div>
        

        

<div className="flex-grow flex-shrink text-center space-y-2">
        <div className="login">
        <div className="flex flex-col items-center space-y-2">
          <a href="#" className="hover:text-blue-500" style={{fontSize:"30px"}}>Who We Are</a>
          <a href="#" className="hover:text-blue-500" style={{fontSize:"30px"}}>Are you a Tyre Dealer?</a>
        </div>
        </div>
        </div>


        <div className="flex-grow flex-shrink text-center space-y-2">
        <div className="login">
        <div className="flex flex-col items-center space-y-2">
          <a href="#" className="hover:text-blue-500" style={{fontSize:"30px"}}>Privacy Policy</a>
          <a href="#" className="hover:text-blue-500" style={{fontSize:"30px"}}>Terms of use.</a>
        </div>
        </div>
        </div>



        <div className="flex-grow flex-shrink text-center space-y-2">
        <div className="login">
        <div className="flex flex-col items-center space-y-2">
          <a href="#" className="hover:text-blue-500" style={{fontSize:"30px"}}>Career</a>
          <a href="#" className="hover:text-blue-500" style={{fontSize:"30px"}}>Contact Us?</a>
          <a href="#" className="hover:text-blue-500" style={{fontSize:"30px"}}>Shipping & Return Policy</a>

        </div>
        </div>
        </div>

      </div>

      <div className="text-center bg-black w-[100%] mx-auto p-4">
        <h1 className="text-md" style={{color:"white"}}>©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.</h1>
      </div>
      
    </footer>

     
    </div>
  );
}

export default Footer;
