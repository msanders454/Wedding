import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'


const faq = () =>{
    return(
        
        
        <div id="story" className="story-area section-padding">
           <Link to='/' aria-label="Next">
                 <i className="back">Back</i>
            </Link>
            <div className="container">
                <div className="col-l2">
                    <div className="section-title text-center">
                        <h2>F.A.Q</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="story clearfix">
                            <div className="story-top"></div>
                            <div className="content-wrapper">
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content" id='faq-stuff'>
                                        <h2>Is there a a theme?</h2>
                                        <p>No theme, just celebrating. Wedding colors are Yellow and Green. 
                                            Other than that wear normal wedding attire. We are not picky. 
                                        </p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content" id='faq-stuff'>
                                        <h2>What time should I arrive?</h2>
                                        <p> As this website is public, we are avoiding putting specific details on it. Please keep an eye out for your invitations (both online and physical) around February.
                                            I would suggest arriving at the venue 30 minutes before the ceremony. 
                                        </p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content" id='faq-stuff'>
                                        <h2>What happens between the ceremony and reception?</h2>
                                        <p>Jessi and Mike will taking pictures at various PSU locations. During this time, you are free to do whatever you want. Explore Penn State and State
                                            college. Information for what to do will be listed soon. Remember to be back at the venue 30 minutes before the reception
                                        </p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content" id='faq-stuff'>
                                        <h2>Where should I park</h2>
                                        <p>The venue has free parking outside and in a garage for those staying at the hotel.
                                            For those not staying there, parking downtown does cost money. They have overnight parking 
                                            on Pugh St, Fraser Street and Beaver Ave.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content" id='faq-stuff'>
                                        <h2>What should I do if I can’t make it?</h2>
                                        <p>RSVPs are due on April 20th, 2023. If you cannot 
                                            make it please RSVP a No. If you RSVP a Yes and later learn that you can't make it, you 
                                            can resubmit the RSVP request and reply with no. If you are not sure, please submitt a no until you can confirm that you can make it.
                            
                                        </p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content" id='faq-stuff'>
                                        <h2>Are kids and pets Welcome??</h2>
                                        <p>As of right now, we are still trying to decide if children will be allowed. Please check back here around November-December for a final decision. The reception
                                            will have alcohol though, including 1 hour of open bar. 
                                            
                                            As for pets, the Graduate hotel allows pets. I don't actually expect any of you to bring your
                                            pets, but if you want to cool. But please no pets at the ceremony or reception though. We are actually thinking about bring our cat Boog. So if you 
                                            want to meet him, he will be happy to meet you.
                                        </p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content" id='faq-stuff'>
                                        <h2>Can I bring a date.</h2>
                                        <p> Plus ones are limited to significant others you have been with for at least 1 year. 
                                        </p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content" id='faq-stuff'>
                                        <h2>Will food and drinks be served at the reception? What kind of food?</h2>
                                        <p>Food and drinks will be at the reception. If you have any allergy or dietary restrictions
                                            please respond so in your RSVP and we will plan accordingly.

                                            Drinks will be there. There will be 1 hour of open bar, then you will have to pay. The hour time for the open bar will be announced later.
                                            
                                        </p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content" id='faq-stuff'>
                                        <h2>Where do you recommend I stay?</h2>
                                        <p> We do have rooms blocked at hotel/venue. That is where Mike and Jessi will be staying (and where the reception is, so it is convenient for people looking to get drunk). Just mention that
                                            you are part of the Hammond-Sanders wedding on May 27th. They are booked for Friday, May 26th and Sat May 27th. It is memorial day weekend, so if you choose to stay an extra day (Sunday night) know that the rooms are not blocked that night, so it is 
                                            not guaranteed and prices may change. 

                                            The hotel should be $149 for Friday and Saturday night, but if you choose to stay extra days outside of our blocked time the price could vary.
                                            If you would like to use the hotel, you will need to book by April 26th, after that day they release the unused rooms.

                                            Other hotels are available. Here is a list of other hotels near the venue.
                                        </p>
                                        <ul className='faq-list'>
                                                <li><a href="https://www.google.com/travel/hotels/State%20College%2C%20PA/entity/ChoIwpG15vbCvsmJARoNL2cvMTFjMzdncjZxcRAB?q=state%20college%20hotels&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4515404%2C4597339%2C4649665%2C4722900%2C4723331%2C4741665%2C4757164%2C4758493%2C4762561%2C4786153%2C4786958%2C4787395%2C4790255%2C4794648%2C4799683&hl=en-US&gl=us&ssta=1&ts=CAESCgoCCAMKAggDEAAaNQoXEhM6EVN0YXRlIENvbGxlZ2UsIFBBGgASGhIUCgcI5g8QBhgUEgcI5g8QBhgVGAEyAhAAKgsKBygBOgNVU0QaAA&rp=OAFAAEgCogERU3RhdGUgQ29sbGVnZSwgUEE&ap=SABoAQ&ictx=1&utm_campaign=sharing&utm_medium=link&utm_source=htls&ved=0CAAQ5JsGahcKEwjwrtfktrD4AhUAAAAAHQAAAAAQAw">Hyatt Place State College</a> $143 a night</li>
                                                <li><a href="https://www.google.com/travel/hotels/State%20College%2C%20PA/entity/ChcI-KyJ3umyqZUuGgsvZy8xdGc1MWRmMhAB?q=state%20college%20hotels&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4515404%2C4597339%2C4649665%2C4722900%2C4723331%2C4741665%2C4757164%2C4758493%2C4762561%2C4786153%2C4786958%2C4787395%2C4790255%2C4794648%2C4799683&hl=en-US&gl=us&ssta=1&ts=CAESCgoCCAMKAggDEAAaNQoXEhM6EVN0YXRlIENvbGxlZ2UsIFBBGgASGhIUCgcI5g8QBhgUEgcI5g8QBhgVGAEyAhAAKgsKBygBOgNVU0QaAA&rp=OAFAAEgCogERU3RhdGUgQ29sbGVnZSwgUEE&ap=SABoAQ&ictx=1&utm_campaign=sharing&utm_medium=link&utm_source=htls&ved=0CAAQ5JsGahcKEwjAr-2OtbD4AhUAAAAAHQAAAAAQAw">Ramada by Wyndham State College Hotel</a> $94 a night.</li>
                                                <li><a href="https://www.google.com/travel/hotels/State%20College%2C%20PA/entity/ChgI6umq-4G7k4n4ARoLL2cvMXRkNnoyaDcQAQ?q=state%20college%20hotels&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4515404%2C4597339%2C4649665%2C4722900%2C4723331%2C4741665%2C4757164%2C4758493%2C4762561%2C4786153%2C4786958%2C4787395%2C4790255%2C4794648%2C4799683&hl=en-US&gl=us&ssta=1&ts=CAESCgoCCAMKAggDEAAaNQoXEhM6EVN0YXRlIENvbGxlZ2UsIFBBGgASGhIUCgcI5g8QBhgUEgcI5g8QBhgVGAEyAhAAKgsKBygBOgNVU0QaAA&rp=OAFAAEgCogERU3RhdGUgQ29sbGVnZSwgUEE&ap=SABoAQ&ictx=1&utm_campaign=sharing&utm_medium=link&utm_source=htls&ved=0CAAQ5JsGahcKEwiA1qqntbD4AhUAAAAAHQAAAAAQAw">Super 8 by Wyndham State College</a> $70 a night</li>
                                                <li><a href="https://www.google.com/travel/hotels/State%20College%2C%20PA/entity/ChcIxL7aidmWysAEGgsvZy8xdGdkcGpuZBAB?q=state%20college%20hotels&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4515404%2C4597339%2C4649665%2C4722900%2C4723331%2C4741665%2C4757164%2C4758493%2C4762561%2C4786153%2C4786958%2C4787395%2C4790255%2C4794648%2C4799683&hl=en-US&gl=us&ssta=1&ts=CAESCgoCCAMKAggDEAAaNQoXEhM6EVN0YXRlIENvbGxlZ2UsIFBBGgASGhIUCgcI5g8QBhgUEgcI5g8QBhgVGAEyAhAAKgsKBygBOgNVU0QaAA&rp=OAFAAEgCogERU3RhdGUgQ29sbGVnZSwgUEE&ap=SABoAQ&ictx=1&utm_campaign=sharing&utm_medium=link&utm_source=htls&ved=0CAAQ5JsGahcKEwiY8NDctbD4AhUAAAAAHQAAAAAQAw">Sleep Inn near Penn State</a> $90 a night</li>
                                                <li><a href="https://www.google.com/travel/hotels/State%20College%2C%20PA/entity/ChoI8Naxq4eQpJ6iARoNL2cvMTFtdzdoajRnXxAB?q=state%20college%20hotels&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4515404%2C4597339%2C4649665%2C4722900%2C4723331%2C4741665%2C4757164%2C4758493%2C4762561%2C4786153%2C4786958%2C4787395%2C4790255%2C4794648%2C4799683&hl=en-US&gl=us&ssta=1&ts=CAESCgoCCAMKAggDEAAaNQoXEhM6EVN0YXRlIENvbGxlZ2UsIFBBGgASGhIUCgcI5g8QBhgUEgcI5g8QBhgVGAEyAhAAKgsKBygBOgNVU0QaAA&rp=OAFAAEgCogERU3RhdGUgQ29sbGVnZSwgUEE&ap=SABoAQ&ictx=1&ved=0CAAQ5JsGahcKEwiQpZ7EtrD4AhUAAAAAHQAAAAAQAw&utm_campaign=sharing&utm_medium=link&utm_source=htls">Scholar State College, Tapestry Collection by Hilton</a> $240 a night</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content" id='faq-stuff'>
                                        <h2>Can I take and post pictures of the wedding on social media?</h2>
                                        <p>During the ceromony, no. We ask that you do NOT take pictures. We will have a professional photographer and we trust them to do their job. We will post pictures that you can save.

                                            The reception is fair game though. Take as many pictures as you want. We ask that you do not post them on Social Media
                                            until we post our own pictures. But when you do post please tag us!! And if you would like to send us pictures you can send to the email listed below.
                                        </p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content" id='faq-stuff'>
                                        <h2>Will you be Mr. and Mrs. Sanders?</h2>
                                        <p>Neither of us plan on changing our last name. Jessi will be Mrs. Hammond. Sorry, Dr. Hammond, Michael will continue to be Mr. Sanders. Boog will continue
                                            to be Boog Gee Sanders.
                                        </p>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content" id='faq-stuff'>
                                        <h2>Do you have great recommendations for cafes, restaurants, museums, points of interest, and activities?</h2>
                                        <p>For a college town, State College has suprisingly a lot to do during the weekend. It's not as busy during the summer
                                            but theres still a lot to do. Information for what to do will be listed soon.
                                        </p>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content" id='faq-stuff'>
                                        <h2>I still have questions, what is the best way to contact you?</h2>
                                        <p>You can contact us at @jessiandmikesittinginatree@gmail.com for any other questions. I assume most
                                            of you have our numbers so you can contact us there as well. We both prefer text over phone calls.

                                            During the Wedding weekend, especially Wedding day, we might be busy and unable to respond to you during
                                            that time. In that case, you can contact our Matron of Honor Rachael Robinson, and Best Man Bilal Ahmed for
                                            any wedding questions.
                                        </p>
                                    </div>
                                </div>
                                
                            <div className="story-bottom"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default faq;