import React from 'react';
import Payment from '../images/payment.png';

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <div className="footer-container">
          <div className="box-container">
            <div className="box">
              <h3>quick links</h3>
              <div className="footer-text" href="#">
                home
              </div>
              <div className="footer-text" href="#">
                products
              </div>
              <div className="footer-text" href="#">
                featured
              </div>
              <div className="footer-text" href="#">
                deal
              </div>
            </div>
            <div className="box">
              <h3>extra links</h3>
              <div className="footer-text" href="#">
                my account
              </div>
              <div className="footer-text" href="#">
                my favorite
              </div>
              <div className="footer-text" href="#">
                my order
              </div>
              <div className="footer-text" href="#">
                my cart
              </div>
            </div>

            <div className="box">
              <h3>contact us</h3>
              <div className="footer-text" href="#">
                071 777 7777
              </div>
              <div className="footer-text" href="#">
                calciclothing@gmail.com
              </div>
              <div className="footer-text" href="#">
                https://www.facebook.com/calci.lk/
              </div>
              <img src={Payment} alt="" />
            </div>
          </div>
          <div className="credit">
            {' '}
            Copyright © 2022 All Rights Reserved.{' '}
            <span> - CALCI CLOTHING - </span> | all rights reserved{' '}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
