import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../src/App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Checkin from './pages/checkin'
import Checkout from "./pages/checkout";
import History from "./pages/history";
import CheckoutUpdate from "./components/checkoutUpdates";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar bg="dark" expand="lg" variant="dark" style={{padding:"2vw"}}>
          <Container fluid>
              <Navbar.Brand href="/" style={{ width: '30vh'}}>
                <img
                  src="https://parkee.app/img/icon/parkee-logo.png"
                  alt=""
                  style={{ width: '100%'}}
                />
              </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav variant="outline-success" className="d-flex my-3 my-lg-0 d-flex ms-auto text-right" navbarScroll>
              <NavLink to="/checkin" className="nav-link m-0">
                  <div className="m-0 nav-size">Checkin</div>
                </NavLink>

                <NavLink to="/checkout" className="nav-link m-0">
                  <div className="m-0 nav-size">Checkout</div>
                </NavLink>

                <NavLink to="/history" className="nav-link m-0">
                  <div className="m-0 nav-size">History</div>
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
    </Navbar>
  <Routes>
  <Route exact path="/" element={<Checkin />} />
    <Route exact path="/checkin" element={<Checkin />} />
    <Route exact path="/checkout/:id" element={<CheckoutUpdate />} />
    <Route exact path="/checkout/" element={<Checkout />} />
    <Route exact path="/history" element={<History />} />
  </Routes>
      </BrowserRouter >
    </>
  );
}

export default App;