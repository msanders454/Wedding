import React, { Component } from 'react';
import './style.css'

class Rsvp extends Component {

    render() {

        return (
            <div id="rsvp" className="rsvp-area go-rsvp-area section-padding">
                <p id="rsvp-note">Due to this website being on well, the internet, we will email the RSVP at an appropoiate time.
                    Check your emails between January and Febuary for the RSVP request form.</p>

                    <iframe title="Campus Tour" src="https://docs.google.com/forms/d/e/1FAIpQLSc0QMNbfLMjpw6uVy0lZKkJVjlCohpi6AlXnK60uSCDnPNOnQ/viewform?embedded=true" width= '100%' height="704" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
            </div>
        )
    }
}

export default Rsvp;