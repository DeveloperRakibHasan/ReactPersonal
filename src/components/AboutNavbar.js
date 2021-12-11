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
                                     background: "#6ea0fd",
                                     color: "#fff"
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
                                    background: "#6ea0fd",
                                     color: "#fff"
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
                                    background: "#6ea0fd",
                                     color: "#fff"
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
