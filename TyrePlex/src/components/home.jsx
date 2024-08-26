import React from 'react';
import Header from './Header';
import './home.css';
import Deals from './deals';
import Services from './Services';
import Body from './Body';
import Payment from './payments';
import Addquestion from './Addquestion';
import AllPurchase from './allpurchase';

import Footer from './Footer';

function Home() {
  return (
    <div>
        <Header/>
        <Body/>
        <Deals/>
        <Services/>
        <AllPurchase/>
        <Payment/>
        <Addquestion/>
        <Footer/>
    </div>
  )
}

export default Home
