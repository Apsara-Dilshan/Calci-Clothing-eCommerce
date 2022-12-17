import React from 'react';
import Companyimage from '../images/home-img.jpeg';


const Body = () => {
  return (
    
    <div>
      <section className="home" id="home">
          <div className="content">
            <span>special offer</span>
            <h3>sale upto <span>70% </span>off</h3>
            <div href="#" className="btn">shop now</div>
          </div>
          <div className="image">
            <img src={Companyimage} alt="" />
          </div>
        </section>
    </div>
  )
}

export default Body