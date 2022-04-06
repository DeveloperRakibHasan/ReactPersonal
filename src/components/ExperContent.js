import React from 'react'
import '../Style/ExperContact.css'




function ExperContent() {
    return (
        <>
            <div className="programming">
                <h1 className='progressbar__title'>WORK EXPERIENCE </h1>
                <ul className='about__work__experience'>
                    <li className='work__experience'>
                    <span>Work</span>
                    <h4>HTML Tamplete</h4>
                    <p>HTML | SASS | JQUERY</p> 
                </li>
                <li className='work__experience'>
                    <span>Experience</span>
                    <h4>3 YEARS</h4>
                    <p>PSD | XD | REACT</p> 
                </li>
                <li className='work__experience'>
                    <span>Project</span>
                    <h4>13+ PROJECT</h4>
                    <p>HTML | REACT | PSD</p> 
                </li>
                <li className='work__experience'>
                    <span>Client</span>
                    <h4>7+ HAPPY CLIENTS</h4>
                    <p>HTML | SASS | JQUERY</p> 
                </li>
                </ul>
            </div>
        </>
    )
}

export default ExperContent
