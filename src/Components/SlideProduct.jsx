import React from 'react'
import P1 from '../images/p-1.jpeg';
import P2 from '../images/p-2.jpeg';
import P3 from '../images/p-3.jpeg';
import P4 from '../images/p-4.jpeg';
import P5 from '../images/p-5.jpeg';
import P6 from '../images/p-6.jpeg';
import P7 from '../images/p-7.jpeg';
import P8 from '../images/p-8.jpeg';
import P9 from '../images/p-9.jpeg';
import P10 from '../images/p-10.jpeg';
// import Swiper  from './Swiper';



const SlideProduct = () => {
return (
    <div>
       <section className="products" id="products">
          <h1 className="heading"> latest <span>products</span> </h1>
          <div className="swiper-container product-slider gap">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="slide">
                  <div className="icons">
                    <div href="#" className="fas fa-heart" />
                  </div>
                  <div className="image">
                    <img src={P1} alt="" />
                  </div>
                  <div className="content">
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="far fa-star" />
                      <span>( 250 reviews )</span>
                    </div>
                    <h3>CROP TOP</h3>
                    <div className="price">LKR. 990<span>LKR. 1190</span></div>
                    <div href="#" className="btn">add to cart</div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slide">
                  <div className="icons">
                    <div href="#" className="fas fa-heart" />
                  </div>
                  <div className="image">
                    <img src={P2} alt="" />
                  </div>
                  <div className="content">
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="far fa-star" />
                      <span>( 250 reviews )</span>
                    </div>
                    <h3>Long Sleeve Crops</h3>
                    <div className="price">LKR. 1190 <span>LKR. 1490</span></div>
                    <div href="#" className="btn">add to cart</div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slide">
                  <div className="icons">
                    <div href="#" className="fas fa-heart" />
                  </div>
                  <div className="image">
                    <img src={P3} alt="" />
                  </div>
                  <div className="content">
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="far fa-star" />
                      <span>( 250 reviews )</span>
                    </div>
                    <h3>Basic Solid T-shirt Dress</h3>
                    <div className="price">LKR. 1790 <span>LKR. 1990</span></div>
                    <div href="#" className="btn">add to cart</div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slide">
                  <div className="icons">
                    <div href="#" className="fas fa-heart" />
                  </div>
                  <div className="image">
                    <img src={P4} alt="" />
                  </div>
                  <div className="content">
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="far fa-star" />
                      <span>( 250 reviews )</span>
                    </div>
                    <h3>T-shirt Dresses</h3>
                    <div className="price">LKR. 1790 <span>LKR. 1990</span></div>
                    <div href="#" className="btn">add to cart</div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slide">
                  <div className="icons">
                    <div href="#" className="fas fa-heart" />
                  </div>
                  <div className="image">
                    <img src={P5} alt="" />
                  </div>
                  <div className="content">
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="far fa-star" />
                      <span>( 250 reviews )</span>
                    </div>
                    <h3>High Neck Crops</h3>
                    <div className="price">LKR. 990 <span>LKR. 1190</span></div>
                    <div href="#" className="btn">add to cart</div>
                  </div>
                </div>
              </div>
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
            </div>
            {/* ................................................... */}
            <div className="swiper-container product-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="slide">
                    <div className="icons">
                      <div href="#" className="fas fa-heart" />
                    </div>
                    <div className="image">
                      <img src={P6} alt="" />
                    </div>
                    <div className="content">
                      <div className="stars">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                        <span>( 250 reviews )</span>
                      </div>
                      <h3>T-shirt Dresses</h3>
                      <div className="price">LKR. 1790 <span>LKR. 1990</span></div>
                      <div href="#" className="btn">add to cart</div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide">
                    <div className="icons">
                      <div href="#" className="fas fa-heart" />
                    </div>
                    <div className="image">
                      <img src={P7} alt="" />
                    </div>
                    <div className="content">
                      <div className="stars">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                        <span>( 250 reviews )</span>
                      </div>
                      <h3>Basic Solid T-shirt Dress</h3>
                      <div className="price">LKR. 1890 <span>LKR. 2090</span></div>
                      <div href="#" className="btn">add to cart</div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide">
                    <div className="icons">
                      <div href="#" className="fas fa-heart" />
                    </div>
                    <div className="image">
                      <img src={P8} alt="" />
                    </div>
                    <div className="content">
                      <div className="stars">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                        <span>( 250 reviews )</span>
                      </div>
                      <h3>T-shirt Dress</h3>
                      <div className="price">LKR. 1790<span>LKR. 1990</span></div>
                      <div href="#" className="btn">add to cart</div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide">
                    <div className="icons">
                      <div href="#" className="fas fa-heart" />
                    </div>
                    <div className="image">
                      <img src={P9} alt="" />
                    </div>
                    <div className="content">
                      <div className="stars">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                        <span>( 250 reviews )</span>
                      </div>
                      <h3>High Neck Crops</h3>
                      <div className="price">LKR. 990<span>LKR. 1190</span></div>
                      <div href="#" className="btn">add to cart</div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide">
                    <div className="icons">
                      <div href="#" className="fas fa-heart" />

                    </div>
                    <div className="image">
                      <img src={P10} alt="" />
                    </div>
                    <div className="content">
                      <div className="stars">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                        <span>( 250 reviews )</span>
                      </div>
                      <h3>CROP TOP</h3>
                      <div className="price">LKR. 990 <span>LKR. 1190</span></div>
                      <div href="#" className="btn">add to cart</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
            </div>
          </div>
        </section> 
    </div>
  
  )
}

export default SlideProduct