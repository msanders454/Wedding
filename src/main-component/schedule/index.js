import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'


const Schedule = () =>{
    return(
        
        <div className="schedule">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <Link to='/' aria-label="Next">
                 <i className="back-schedule">Back</i>
                    </Link>
                        <div className="schedule-content">
                            <h2>Schedule of Events</h2>
                            <p> We are excited for our big day. Here is 
                                the timeline for the events this weekend. 
                                Note that brochures will be at the ceremony. But for those who are 
                             anxious, here is a quick schedule </p>
                            <h3>Saturday</h3>
                            <p>2:15 pm- Ceremony starts</p>
                            <p>3:00 pm- Ceremony ends. Cocktail hour begins</p>
                            <p>4:00 pm- Reception starts.</p>
                            <p>4:30 pm- Dinner is served.</p>
                            <p>5:30 pm- Dancing begins.</p>
                            <p>8:00 pm- Receptions end</p>
                            <p>8:30 pm- Bar hangout with the Bride and Groom</p>
                            <h3>Sunday</h3>
                            <p className="sch-Description">Most people will be leaving on Sunday, but if you want to hangout with the Bride and Groom, you can. Text us and we will arange time to hangout.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Schedule;