import React, { Component } from 'react';
import './style.css'

class Rsvp extends Component {

    render() {

        return (
            <div id="rsvp" className="rsvp-area go-rsvp-area section-padding">
                <p id="rsvp-note">Due to this website being on, well, the internet, we do not want to put RSVP forms here, and so will send it out later.
                     Around February, check your emails for the RSVP request form and mailboxes for invitations.</p>


                <p id="rsvp-note">UPDATE: Yes we have the link to the Hotel bookings. Jessi and Mike will be sending invitations soon. If you want the invite right now, please contact Mike or Jessi with the invite link.</p>
                    <iframe title="Campus Tour" src="https://docs.google.com/forms/d/e/1FAIpQLSc0QMNbfLMjpw6uVy0lZKkJVjlCohpi6AlXnK60uSCDnPNOnQ/viewform?embedded=true" width= '100%' height="704" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
            </div>
        )
    }
}

export default Rsvp;