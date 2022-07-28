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
                                        <p> The wedding ceremony starts at 2:30pm. That means we start at 2:30. Not 2:35, not 2:45, not 3pm. 
                                            We will start with or without you. I would suggest arriving at the ceromony 30 minutes before the ceremony. The Reception
                                            starts 6 pm. Arrive 30 minutes before that as well.
                                        </p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content" id='faq-stuff'>
                                        <h2>What happens between the ceremony and reception?</h2>
                                        <p>Jessi and Mike will taking pictures at Penn State's Arboretum and possible 
                                            at other PSU locations. During this time, you are free to do whatever you want. Explore Penn State and State
                                            college. Here is a list of our favorite places. Remember to be back at the Graduate by 5:30
                                        </p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content" id='faq-stuff'>
                                        <h2>Where should I park</h2>
                                        <span className="date">May 27, 2023</span>
                                        <p>The Graduate has free parking outside and in a garage for those staying at the hotel.
                                            For those not staying at the Graduate, parking downtown does cost money. They have overnight parking 
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
                                        <p>RSVPs are due on April 20th, 2023. If you can not 
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
                                        <p>As of right now, kids are allow to both the ceremony and the reception. The reception
                                            will have alcohol though, including 1 hour of open bar. It is up to you if you want to
                                            bring kids or not, but you are responsible for them. 
                                            
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
                                        <p>If you would like to bring a plus 1 thats fine. Please say in your RSVP if you Are
                                            bringing a plus one. Please limit your plus ones to your spouses or relationship partners.
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

                                            Drinks will be there. They will cost money except for when the 1 hour open bar
                                             happens. The hour time for the open bar will be announced later.
                                            Perhaps say There is a cash bar except for one hour.  
                                            The  time for the open bar will be announced later.
                                        </p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content" id='faq-stuff'>
                                        <h2>Where do you recommend I stay?</h2>
                                        <p>The Graduate has 20 rooms blocked for us. That is where Mike and Jessi will be staying (and where the reception is, so it is convenient for people looking to get drunk). Just mention that
                                            you are part of the Hammond-Sanders wedding on May 27th. They are booked for Friday, May 26th and Sat May 27th. However, because it will be
                                            Memorial Day weekend, Jessi and I plan to stay Sunday as well. If you want to stay Sunday as well, tell the Graduate that you want to book for SUnday as well. Please know that Sunday is not
                                            on the Hammond-Sanders list, so Sunday rooms are not guarantee. 

                                            The Graduate should be $149 for Friday and Saturday night, but if you choose to stay extra days outside of our blocked time the price could vary.
                                            If you would like to use the Graduate, you will need to book by April 26th, after that day they release the unused rooms.

                                            Other hotels besides the Graduate are available. Here is a list of other hotels near the Graduate.
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
                                        <p>During the ceromony, no. We will have a professional photographer and we trust them to do their job. We will post pictures that you can save.

                                            The reception is fair game though. Take as many pictures as you want. Do not post them on Social Media
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
                                        <h2>What happens between the ceremony and reception?</h2>
                                        <p>Jessi and Mike will taking pictures at Penn State's Aubreutum and possible 
                                            at other PSU locations. Will plan on having a photographer take our photos during
                                            this time. You are allow to take pictures with us and you can use your own cameras and 
                                            phones. Posting the Pictures on Social Media great as well.
                                        </p>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content" id='faq-stuff'>
                                        <h2>Do you have great recommendations for cafes, restaurants, museums, points of interest, and activities?</h2>
                                        <p>For a college town, Penn State has suprisingly a lot to do for a weekend. It's not as busy during the summer
                                            but theres still a lot to do.
                                        </p>
                                        <ul className='faq-list'>
                                                <li><a href="https://nittany.org/">Climb Mount Nittany</a></li>
                                                <li><a href="https://tusseymountain.com/">Tussey Mountain Games</a></li>
                                                <li><a href="https://arboretum.psu.edu/">Smell the Flowers at the Arboretum</a></li>
                                                <li><a href="http://www.cafe210.net/">Enjoy one of PSU's best restaurants and bars.</a></li>
                                                <li><a href="https://palmermuseum.psu.edu/">Get lost in Penn State's art museum</a></li>
                                        </ul>
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