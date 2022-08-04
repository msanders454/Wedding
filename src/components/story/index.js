import React from 'react'
import strory1 from '../../images/story/1.jpg'
import strory2 from '../../images/story/2.jpg'
import strory3 from '../../images/story/3.jpg'
import strory4 from '../../images/story/4.jpg'
import strory5 from '../../images/story/5.jpg'
import './style.css'


const Story = () =>{
    return(
        <div id="story" className="story-area section-padding">
            <div className="container">
                <div className="col-l2">
                    <div className="section-title text-center">
                        <h2>Our Story</h2>
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
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={strory1} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>First time we met</h2>
                                        <span className="date">May 31, 2017</span>
                                        <p>Prepare for trouble and make it double. Mike and Jessi met in Pollock dining commons,
                                             while taking a water break. Mike's pickup line was asking if Jessi had a partner name James
                                            and a cat name Meowth. Jessi thought she was in trouble until she found out, Mike was just
                                            weird.
                                        </p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={strory2} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Our First Date</h2>
                                        <span className="date">July 26, 2017</span>
                                        <p>Nothing is better then Chipotle. Mike and Jessi's official first date was Chiptole.
                                            Ok, not the most special place, but hey, we were college students. Plus, we both
                                            love Burrito bowls.
                                        </p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={strory3} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Our Marriage Proposal</h2>
                                        <span className="date">Sept 7, 2021</span>
                                        <p>We don't like cheesecake with lemon. After moving in together in 2020, Michael and Jessi felt
                                            the time was right for marriage. Mike thought the perfect proposal was to use ring pops and cheesecake.
                                            We are not the flashy type of people, but the proposal was right for us. Next time though,
                                            let's have cheesecake without lemon.
                                        </p>
                                    </div>
                                </div><div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={strory5} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Our First Child</h2>
                                        <span className="date">June 24, 2022</span>
                                        <p>On this day, Jessi and Mike adopted their first child. Ok maybe he's not
                                            a human but he's still their kid. Boog Gee Sanders is his name. And just like
                                            a Sanders, Boog loves to eat.
                                        </p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={strory4} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Our Wedding</h2>
                                        <span className="date">May 27, 2023</span>
                                        <p>Now you get to be part of our story. We can't wait for the event and we hope you guys can celebrate
                                            the special event with us.
                                        </p>
                                    </div>
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

export default Story;