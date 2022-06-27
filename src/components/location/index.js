import React from 'react'
import Sectiontitle from '../section-title'
import strory1 from '../../images/events/1.jpg'
import strory2 from '../../images/events/2.jpg'

import './style.css'

const Location = () => {
    return(

        
    <div id="event" className="service-area section-padding">
        <div className="container">
            <Sectiontitle section={'When & Where'}/>
            <div className="service-area-menu">
                <div className="Ceremony-wrap">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="ceromony-img">
                                <img src={strory1} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="ceromony-content">
                                <h3>Wedding Location</h3>
                                <p>We are going to have our wedding in State College Pennsylvania. It's the place
                                    where we met and it has a special place in our hearts. State college is 3 and half hours
                                    from Philly, 30 mins from Altoona and 5 and half hours from Watertown Ny.</p>
                                <a href="https://www.google.com/maps/place/State+College,+PA/@40.7881233,-77.92244,12z/data=!3m1!4b1!4m5!3m4!1s0x89cea899c13bdb73:0x9ce1c6c2833c8091!8m2!3d40.7933949!4d-77.8600012">See Location</a> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Ceremony-wrap">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="ceromony-img">
                             <img src={strory2} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="ceromony-content">
                            <h3>Wedding Ceremony</h3>
                            <span className='date'>Saturday,May 27th, 2.00 PM -3.00 pm {'\n'} </span>
                            <h3>Reception Party</h3>
                            <span className='date'>Saturday,May 27th, 6.00 PM -12.00 AM</span>
                            <p>Both the ceremony and the reception will both be at the Graduate hotel.
                                More details will arrive later. </p>
                            <a href="https://www.google.com/maps/place/Graduate+State+College/@40.7912949,-77.8728839,15z/data=!3m1!4b1!4m8!3m7!1s0x89cea97ed24f9533:0x26d761474571529b!5m2!4m1!1i2!8m2!3d40.791279!4d-77.8641506">See Location</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Location;