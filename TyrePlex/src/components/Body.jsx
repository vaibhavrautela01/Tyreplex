import React from 'react';
import './Body.css';

function Body() {
  return (
    <div className="flex justify-between p-4 bg-white w-[95%] mx-auto mt-8">
      <div className="body-container text-lg">
        <div className="body">
          <div className="text-[15rem] font-bold">
            <h1>SHREE HEMKUNT TYRES AND SERVICES</h1>
          </div>
          <div className="rating text-xl">
            <span className="rating-star text-3xl">4.9</span>
            <span className="rating-star text-3xl">★</span>
            <span className="rating-star text-3xl">★</span>
            <span className="rating-star text-3xl">★</span>
            <span className="rating-star text-3xl">★</span>
            <span className="rating-count ml-4">2278 Reviews</span>
            <button className="rating-button text-lg">Rate</button>
          </div>
          <div className="verified text-xl">
            <span className="verified-icon mr-2 text-2xl">✔</span>
            <span className="verified-text">Verified</span>
          </div>
        </div>
        <div className="images">
          <img src="https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300-w450" alt="CEAT Shoppe 1" style={{  position: "relative",right:"50px",left:"50px"
}}/>
          <img src="https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300-w450" alt="CEAT Shoppe 2" />
        </div>
        <div className="info text-lg">
          <span className="info-icon mr-2 text-xl">📍</span>
          <span className="info-text">PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02 INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014</span>
        </div>
        <div className="info text-lg">
          <span className="info-icon mr-2 text-xl">⏰</span>
          <span className="info-text">Open - Monday to Sunday 10:00AM to 8:00PM</span>
        </div><br/>
        <button className="get-directions-button text-lg" style={{position: "relative",left:"50px"}}>Get Directions</button>
        <div className="reviews text-center text-lg">
          <span className="reviews-count text-4xl font-bold">2278</span>
          <span className="reviews-text text-xl">Google Reviews</span>
        </div>
        <div className="review-container">
          <div className="review text-lg">
            <div className="review-profile">
              <span className="review-name text-xl font-bold">Md Nasir</span>
            </div>
            <div className="review-content">
              <p className="text-lg">Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service. We were delighted with your...</p>
            </div>
          </div>
          <div className="review text-lg">
            <div className="review-profile">
              <span className="review-name text-xl font-bold">Rohit Bhati</span>
            </div>
            <div className="review-content">
              <p className="text-lg">Went for Tyre change. Ultimate service by shoppe boys. Owner behavior very cool. Guide as per ur budget. Highly recommend</p>
            </div>
          </div>
          <div className="review text-lg">
            <div className="review-profile">
              <span className="review-name text-xl font-bold">Pradeep Kumar</span>
            </div>
            <div className="review-content">
              <p className="text-lg">Best tyre shop in Indirapuram. Good dealing with customer. All types tyre available here. Price also responsible. Overall good experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
