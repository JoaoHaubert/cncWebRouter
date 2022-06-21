import React from 'react';

const Contact = props => (
    <div className = "center">
        <p>15 years in the market researching and applying CNC machining technology.</p>
        <p>We have specialists all over EU</p>
        <p>Get in touch with cncweb</p>
        <p><b>cncwebservices@cncweb.ie</b></p>
        <p>or</p>
        <button className = "btn" onClick={event =>{
            event.preventDefault();
            window.open("https://api.whatsapp.com/send?1=en_IE&phone=3530833113197")}
            }>Chat with us</button>
    </div>
)
export default Contact;