import React from 'react'
import '../Style/AboutContact.css'

function AboutContact() {
    return (
        <div>
            <h1 className="contitl">Contact</h1>
            <form>
                <input type="text" placeholder="Your Name"></input>
                <input type="email" placeholder="Your E-mail"></input>
                <input type="text" placeholder="Your Message" className="sms"></input> <br></br>
                <button className="btn-abcon">Sent</button>
            </form>
        </div>
    )
}

export default AboutContact
