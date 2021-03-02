import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, useLocation, Link} from "react-router-dom";
import Cookies from 'js-cookie';
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

function SideBar(props) {
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

    // if (props.getLoginStatus) {
        return (
            <div class="sidebar">
            <a class="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>
        );
    // }

}

export default SideBar;
