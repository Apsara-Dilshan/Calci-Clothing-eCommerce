import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/esm/Badge';
// import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useContext } from 'react';
import { Store } from '../Store';
// import Container from 'react-bootstrap/esm/Container';
// import Navbar from './Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Header() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
  };
  return (
    <>
      <ToastContainer position="bottom-center" limit={1} />
      <div className="header">
        <Link to="/">
          {' '}
          <div className="logo">
            CALCI<span className="logo_span"> #be your own label</span>
          </div>
        </Link>
        <div className="form">
          <input type="text" id="search-bar" placeholder="search here..." />
          <label htmlFor="search-bar" className="fas fa-search" />
        </div>

        <div className="icons">
          {/* <Link to="/Navbar">
          {' '}
          <div id="menu-bar" className="fas fa-bars" />{' '}
        </Link>
        <Link to="/">
          <div id="theme-toggler" className="fas fa-moon" />
        </Link>
        <Link to="/">
          <div className="fas fa-heart" />
        </Link> */}
          <>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                <LinkContainer to="/profile">
                  <NavDropdown.Item>User Profile</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/orderhistory">
                  <NavDropdown.Item>Order History</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <Link
                  className="dropdown-item"
                  to="#signout"
                  onClick={signoutHandler}
                >
                  Sign Out
                </Link>
              </NavDropdown>
            ) : (
              <Link to="/signin">
                <div className="fas fa-user" />{' '}
              </Link>
            )}
          </>
          {/* <Nav className="me-auto"> */}
          <Link to="/cart">
            <div className="fas fa-shopping-cart" />
            {cart.cartItems.length > 0 && (
              <Badge pill bg="danger">
                {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
              </Badge>
            )}
          </Link>
          {/* </Nav> */}
        </div>
      </div>
    </>
  );
}

export default Header;
