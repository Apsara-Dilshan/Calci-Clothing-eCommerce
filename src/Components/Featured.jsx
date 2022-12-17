import React from 'react'
import f11 from '../images/f-1-1.jpg';
import f12 from '../images/f-1-2.jpg';
import f13 from '../images/f-1-3.jpg';
import f21 from '../images/f-2-1.jpg';
import f22 from '../images/f-2-2.jpg';
import f23 from '../images/f-2-3.jpg';
import f31 from '../images/f-3-1.jpg';
import f32 from '../images/f-3-2.jpg';
import f33 from '../images/f-3-3.jpg';



const Featured = () => {
  return (
    <div>
 <section className="featured" id="featured">
          <h1 className="heading"> <span>featured</span> products </h1>
          <div className="box-container">
            <div className="box">
              <div className="image-container">
                <div className="small-image">
                  <img src={f13} className="small-image-1" alt="" />
                  <img src={f12} className="small-image-1" alt="" />
                  <img src={f11} className="small-image-1" alt="" />
                </div>
                <div className="big-image">
                  <img src={f13} className="big-image-1" alt="" />
                </div>
              </div>
              <div className="content">
                <h3>Couple T-shirts</h3>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="far fa-star" />
                  <span>( 250 reviews )</span>
                </div>
                <p>Couple T-shirts.
                  Print Colors Available. Inbox us for orders and inquiries</p>
                <div className="price">LKR. 2290 <span>LKR. 3290</span></div>
                <div href="#" className="btn">add to cart</div>
              </div>
            </div>
            <div className="box">
              <div className="image-container">
                <div className="small-image">
                  <img src={f22} className="small-image-2" alt="" />
                  <img src={f21} className="small-image-2" alt="" />
                  <img src={f23} className="small-image-2" alt="" />
                </div>
                <div className="big-image">
                  <img src={f22} className="big-image-2" alt="" />
                </div>
              </div>
              <div className="content">
                <h3>Comfy and Trendy Crop Tops</h3>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="far fa-star" />
                  <span>( 250 reviews )</span>
                </div>
                <p>Comfy and Trendy Crop Tops. Limited Stock Available.Custom Name Print Available</p>
                <div className="price">LKR. 1090 <span>LKR. 1290</span></div>
                <div href="#" className="btn">add to cart</div>
              </div>
            </div>
            <div className="box">
              <div className="image-container">
                <div className="small-image">
                  <img src={f31} className="small-image-3" alt="" />
                  <img src={f32} className="small-image-3" alt="" />
                  <img src={f33} className="small-image-3" alt="" />
                </div>
                <div className="big-image">
                  <img src={f31} className="big-image-3" alt="" />
                </div>
              </div>
              <div className="content">
                <h3>මල්ලි (RANJAN SERIES)</h3>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="far fa-star" />
                  <span>( 250 reviews )</span>
                </div>
                <p>Custom T-Shirts. RANJAN SERIES. මල්ලි DM For Orders. </p>
                <div className="price">LKR. 990 <span>LKR. 1090</span></div>
                <div href="#" className="btn">add to cart</div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Featured