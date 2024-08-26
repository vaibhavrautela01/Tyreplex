import React from 'react'
import './addquestion.css'

function Addquestion() {
  return (
    <>
    <div className='addque-main'>
      <div style={{margin:"50px" }}>
      <h1>Have a question about Tyres?</h1>
      <h1>Get an answer in 24 hours from our experts.</h1>
      <input
        type="text"
        placeholder="Ask or Search Your Question."
        className="search-input"
      />

      </div>
    </div>
    </>
  )
}

export default Addquestion
