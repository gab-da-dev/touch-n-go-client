import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, useLocation, Link} from "react-router-dom";
import Cookies from 'js-cookie';
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

function NavigationbBar(props) {
    const [token,
        setToken] = useState(Cookies.get('token'));
    const location = useLocation();
    const [selectedNav,
        setSelectedNav] = useState(location.pathname);
    function logout() {
        alert('test');
        Cookies.remove('token');
    }

    const handleActive = (clickedNav) => {
        setSelectedNav(clickedNav);
        console.log(location.pathname);
    }

    if (props.isLoggedIn) {
        return (
            <Navbar
                className="navbar navbar-expand-lg navbar-light bg-blue shadow-sm"
                expand="lg"
                fixed="top">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navbar.Brand href="#home">touch&go</Navbar.Brand>
                    <Nav className="text-center ml-auto">
                        <Link
                            className={selectedNav === '/'
                            ? 'active nav-link'
                            : 'nav-link'}
                            to="/"
                            onClick={() => {
                            handleActive('/')
                        }}>Home
                            <span className="sr-only">(current)</span>
                        </Link>
                        <Link
                            className={selectedNav === '/stores'
                            ? 'active nav-link'
                            : 'nav-link'}
                            to="/stores"
                            onClick={() => handleActive('/stores')}>View stores
                            <span className="sr-only">(current)</span>
                        </Link>
                        <Link
                            className={selectedNav === '/orders'
                            ? 'active nav-link'
                            : 'nav-link'}
                            to="/orders"
                            onClick={() => {handleActive('/orders');}}>Orders
                            <span className="sr-only">(current)</span>
                        </Link>
                        <Link
                            className={selectedNav === '/Logout'
                            ? 'active nav-link'
                            : 'nav-link'}
                            // to="/login"
                            onClick={() => {handleActive('/Orders'); }}>Logout
                            <span className="sr-only">(current)</span>
                        </Link>

                        {/* <Nav.Link href="/stores">View stores</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link> */}
                    </Nav>
                    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form> */}
                </Navbar.Collapse>
            </Navbar>
            

        );
    } else {
        return (
            <Navbar
                className="navbar navbar-expand-lg navbar-light bg-blue shadow-sm"
                expand="lg"
                fixed="top">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navbar.Brand href="#home">touch&go</Navbar.Brand>
                    <Nav className="text-center ml-auto">
                        <Link
                            className={selectedNav === '/'
                            ? 'active nav-link'
                            : 'nav-link'}
                            to="/"
                            onClick={() => {
                            handleActive('/')
                        }}>Home
                            <span className="sr-only">(current)</span>
                        </Link>
                        <Link
                            className={selectedNav === '/stores'
                            ? 'active nav-link'
                            : 'nav-link'}
                            to="/stores"
                            onClick={() => handleActive('/stores')}>View stores
                            <span className="sr-only">(current)</span>
                        </Link>
                        <Link
                            className={selectedNav === '/login'
                            ? 'active nav-link'
                            : 'nav-link'}
                            // to="/login"
                            onClick={() => {handleActive('/login'); props.setShowLoginModal(true)}}>Login
                            <span className="sr-only">(current)</span>
                        </Link>
                        <Link
                            className={selectedNav === '/register'
                            ? 'active nav-link'
                            : 'nav-link'}
                            // to="/register"
                            onClick={() =>{ handleActive('/register'); props.setShowRegisterModal(true)}}>Register
                            <span className="sr-only">(current)</span>
                        </Link>

                        {/* <Nav.Link href="/stores">View stores</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link> */}
                    </Nav>
                    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form> */}
                </Navbar.Collapse>
            </Navbar>

        // <nav className="navbar navbar-expand-lg navbar-light bg-blue shadow-sm">
        // <Link className="navbar-brand" to="/">Touch & Go</Link>     <button
        // className="navbar-toggler"         type="button" data-toggle="collapse"
        //   data-target="#navbarSupportedContent"
        // aria-controls="navbarSupportedContent"         aria-expanded="false"
        // aria-label="Toggle navigation">         <span
        // className="navbar-toggler-icon"></span>     </button>     <div
        // className="collapse navbar-collapse" id="navbarSupportedContent">         <ul
        // className="navbar-nav ml-auto">             <li className="nav-item active">
        //               <Link className="nav-link" to="/">Home <span
        // className="sr-only">(current)</span>                 </Link>  </li>
        //   <li className="nav-item">                 <Link className="nav-link"
        // to="/stores">View stores</Link>             </li>      {/*
        // {props.cartTotal.length > 0                 ? <li className="nav-item">
        //                   <Link className="nav-link" to="/cart"><FontAwesomeIcon
        // icon={faShoppingCart}/>   <span>
        // {props.cartTotal.length}</span>                    </Link>
        //  </li>                 : ''         } */}             <li
        // className="nav-item">                 <Link className="nav-link"
        // to="/login">Login</Link>             </li> <li className="nav-item ml-auto">
        //                <Link className="nav-link" to="/register">Register</Link>
        //        </li>         </ul>     </div> </nav>
        );
    }

}

export default NavigationbBar;
