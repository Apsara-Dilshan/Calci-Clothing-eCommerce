import React from 'react';
// import ReactDOM from 'react-dom';
import Main from './Pages/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar';
import Men from './Components/Products/Men';
import ProductView from './Pages/ProductView';
import Container from 'react-bootstrap/Container';
import CartView from './Pages/CartView';
import SignIn from './Pages/SignIn';
import ShippingAddressView from './Pages/ShippingAddressView';
import Signup from './Pages/SignUp';
import PaymentMethodView from './Pages/PaymentMethodView';
import PlaceOrderView from './Pages/PlaceOrderView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Men" element={<Men />} />
      </Routes>
      <Container className="mt-3">
        <Routes>
          <Route path="/product/:slug" element={<ProductView />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/placeorder" element={<PlaceOrderView />} />
          <Route path="/shipping" element={<ShippingAddressView />}></Route>
          <Route path="/payment" element={<PaymentMethodView />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
