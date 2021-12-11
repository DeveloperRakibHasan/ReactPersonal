import React from 'react'
import {NavLink} from 'react-router-dom'
import '../Style/Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-area">
                <div className="logo">
                <NavLink to="/" className="logo-link">
                        LOGO
                    </NavLink>
                </div>
                <div className="menu">
                    <ul className="menu__navbar">
                        <li className="menu-list">
                            <NavLink 
                            exact
                            to="/"
                             className="menu-list__item"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#CBEDF7",
                                    background: "white"
                                                 }}
                            >
                                HOME
                            </NavLink>
                        </li>
                        <li className="menu-list">
                            <NavLink
                            exact
                             to="/about"
                              className="menu-list__item"
                             activeStyle={{
                                    fontWeight: "bold",
                                    color: "#CBEDF7",
                                    background: "white"
                                                 }}
                            >
                                ABOUT
                            </NavLink>
                        </li>
                        <li className="menu-list">
                            <NavLink
                            exact
                             to="/service" 
                             className="menu-list__item"
                             activeStyle={{
                                    fontWeight: "bold",
                                    color: "#CBEDF7",
                                    background: "white"
                                                 }}
                            >
                                SERVICE
                            </NavLink>
                        </li>
                        <li className="menu-list">
                            <NavLink
                            exact
                             to="/contact"
                              className="menu-list__item"
                             activeStyle={{
                                    fontWeight: "bold",
                                    color: "#CBEDF7",
                                    background: "white"
                                    
                                                 }}
                            >
                                CONTACT
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
