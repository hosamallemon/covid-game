import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';

import logo from '../../Assets/logo.png';

import './Navbar.css';

class Navbar extends Component {

    render() {
        return(
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link to="/" className="navbar-brand">
                        <img src={logo}  width="45px" height="40px" /> AWO جمعية النساء العربيات
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/message" className="nav-link">رسالتنا لك<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/rules" className="nav-link">طريقة اللعب<span className="sr-only">(current)</span></Link>
                            </li>
                        </ul>
                        <h6 className="text-right text-white myh6">خليك_بالدار# | #Stay_home</h6>
                    </div>
                </nav>
            
        );
    }
}

export default withRouter(Navbar);