import React, { Component } from 'react';
import './style.css'

class Rsvp extends Component {

    render() {

        return (
            <div id="rsvp" className="rsvp-area go-rsvp-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                            <iframe title="My Daily Marathon Tracker" src="https://docs.google.com/forms/d/e/1FAIpQLSdJb7itMopIN40qL4y3IUL_tHzKebluiSEBb8r6wO18Lpmzew/viewform?embedded=true" width="100%" height="1833" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Rsvp;