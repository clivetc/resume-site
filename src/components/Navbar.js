import React, {Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default class Navbar extends Component {
    render(){
        return(
            <div>
                <nav className="light-blue darken-4">
                    <div className="container">
                        <div className="nav-wrapper">
                            <Link to ="/" className="brand-logo">
                                Tendai Resume
                            </Link>
                            <Link to="/" data-target="side-nav" className="sidenav-trigger">
                                <i className="material-icons">menu</i>
                            </Link>
                            <ul className="right hide-on-med and down">
                                <li>
                                    <Link t="/">
                                        <i className="fas fa-home"></i>Home
                                    </Link>
                                </li>
                                <li>
                                    <Link t="/skills">
                                        <i className="far fa-laptop"></i>Skills
                                    </Link>
                                </li>
                                <li>
                                    <Link t="/experience">
                                        <i className="fas fa-id-badge"></i>Experience
                                    </Link>
                                </li>
                                <li>
                                    <Link t="/education">
                                        <i className="fas fa-graduation-cap"></i>Education
                                    </Link>
                                </li>
                                <li>
                                    <Link t="/portfolio">
                                        <i className="fas fa-briefcase"></i>Porfolio
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <ul className="sidenav" id="side-nav">
                                <li>
                                    <Link t="/">
                                        <i className="fas fa-home"></i>Home
                                    </Link>
                                </li>
                                <li>
                                    <Link t="/skills">
                                        <i className="far fa-laptop"></i>Skills
                                    </Link>
                                </li>
                                <li>
                                    <Link t="/experience">
                                        <i className="fas fa-id-badge"></i>Experience
                                    </Link>
                                </li>
                                <li>
                                    <Link t="/education">
                                        <i className="fas fa-graduation-cap"></i>Education
                                    </Link>
                                </li>
                                <li>
                                    <Link t="/portfolio">
                                        <i className="fas fa-briefcase"></i>Porfolio
                                    </Link>
                                </li>
                            </ul>
            </div>

        );
            
    }
}

