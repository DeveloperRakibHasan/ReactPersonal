import React from 'react'
import '../Style/AboutSlider.css'
import AboutNavbar from './AboutNavbar'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AboutContent from './AboutContent';
import ExperContent from './ExperContent';
import AboutContact from './AboutContact';

function AboutSlider() {
    return (
        <>
        <div className="about-slider__section">
            <div className="about-slider__area">
                <div className="about__left">
                    <img
                     src={require('../img/profile.jpg').default}
                     className="ab-profile-img"
                     ></img>
                     <h2 className="profile-worker__name">Rakib Hasan</h2>
                     <span className="profile-work__title">Web Devloper</span>

                             <li className="ab-socal__link"> 
                             <a href="https://www.linkedin.com/in/md-rakib-433969214/" target="_blank"><i class="fab fa-linkedin-in"></i></a> 
                             <a href="https://www.facebook.com/rakib.v.2/" target="_blank"><i class="fab fa-facebook-square"></i></a>
                             <a href="https://github.com/git-rakib" target="_blank"><i class="fab fa-github"></i></a>
                              </li>
                              <p><b>&copy; 2021</b>  All rights reserved</p>
                </div>
                <div className="about__right">
                   <Router>
                   <AboutNavbar />
                   <Switch>
                        <Route exact path="/about" component={AboutContent} />
                        <Route exact path="/expercontent" component={ExperContent} />
                        <Route exact path="/aboutcontact" component={AboutContact} />
                   </Switch>
                   </Router>

                </div>
            </div>
        </div>
        </>
    )
}

export default AboutSlider
