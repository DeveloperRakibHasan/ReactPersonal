import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Style/AboutSlider.css'

function AboutNavbar() {
    return (
        <>
             <nav className="about__content-btn">
                        <ul>
                            <li>
                                <NavLink
                                exact
                                 to="/about"
                                 className="about-link-btn"
                                 activeStyle={{
                                     background: "#D8E6E6",
                                     color: "#000"
                                }}
                                  >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                exact
                                 to="/expercontent"
                                 className="about-link-btn"
                                 activeStyle={{
                                    background: "#D8E6E6",
                                     color: "#000"
                                }}
                                  >
                                    experience
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                exact
                                 to="/aboutcontact"
                                 className="about-link-btn"
                                 activeStyle={{
                                    background: "#D8E6E6",
                                     color: "#000"
                                }}
                                  >
                                    Contact
                                </NavLink>
                            </li>
                            
                        </ul>
                    </nav>

        </>
    )
}

export default AboutNavbar
