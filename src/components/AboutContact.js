import React from 'react'
import '../Style/AboutContact.css'

function AboutContact() {
    return (
        <div>
            <h1 className="contitl">Contact</h1>
            <form>
                <input type="text" placeholder="Your Name"></input>
                <input type="email" placeholder="Your E-mail"></input>
                <textarea rows="4" cols="65" className="sms" name="comment" form="usrform" placeholder="Your message..."></textarea> <br></br>
                <button className="btn-abcon">Sent</button>
            </form>
        </div>
    )
}

export default AboutContact
