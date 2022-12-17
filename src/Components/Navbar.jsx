import React from 'react';
// import {Link} from 'react-router-dom';
// import Header from './Header';

const Navbar = () => {
  return (
    <>
      {/* <Header/> */}
      <nav className="navbar" id="navbar">
        <div className="user">
          <img src="./images/download.jpg" alt="" />
          <h3>user</h3>
        </div>
        <div className="links">
          <div>home</div>
          <div>Orders</div>
          <div>Messages</div>
          <div>reviews</div>
          <div>Your Account</div>
          <div>LOG IN</div>
        </div>
        <div id="close" className="fas fa-times" />
      </nav>
    </>
  );
};

export default Navbar;
