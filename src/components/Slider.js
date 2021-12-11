import React from 'react'
import '../Style/Slider.css'
import {NavLink} from 'react-router-dom'

function Slider() {
    return (
        <>
          <section className="slider-section">
              <div className="container">
                    <div className="slider-area">
                        <div className="slider__logo">
                            <span>Personal</span>
                        </div>
                        <div className="slider-area__text">
                            <h2 className="slider-text__h2"><span className="st-img">React</span> web Devloper</h2>
                            <p className="slider-text__p">Hey, I am <b> MD Rakib. </b> I am a React web Devloper and Designer. <br></br>
                            Do yo Create a React Website? if "YES" then You can contact ME!</p>
                            <div className="slider-btns">
                        <NavLink
                        to="/contact"
                        className="slider-btn"
                  
                        >
                        CONTACT ME!
                        </NavLink>
                        <NavLink
                        to="/contact"
                        className="slider-btn btn__active"
                        >
                        HIRE ME?
                        </NavLink>

                    </div>
                        </div>
                    </div> 
              </div>
          </section>  
        </>
    )
}

export default Slider
