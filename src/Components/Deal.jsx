import React from 'react'
import counter from '../images/counter-img.jpg';

const Deal = () => {
  return (
    <div>
      <section className="deal" id="deal">
          <h1 className="heading"> special <span>deal</span> </h1>
          <div className="row">
            <div className="content">
              <span className="discount">upto <span className="per">50%</span> off</span>
              <h3 className="text">deal of the week</h3>
              <div className="count-down">
                <div className="box">
                  <h3 id="days">00</h3>
                  <span>days</span>
                </div>
                <div className="box">
                  <h3 id="hours">00</h3>
                  <span>hours</span>
                </div>
                <div className="box">
                  <h3 id="minutes">00</h3>
                  <span>minutes</span>
                </div>
                <div className="box">
                  <h3 id="seconds">00</h3>
                  <span>seconds</span>
                </div>
              </div>
              <div href="#" className="btn">shop now</div>
            </div>
            <div className="image">
              <img src={counter} alt="" />
            </div>
          </div>
        </section>  
    </div>
  )
}

export default Deal