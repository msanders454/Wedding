import React from 'react'
import Sectiontitle from '../section-title'
import couple1 from '../../images/couple/img-1.jpg'
import couple2 from '../../images/couple/img-2.jpg'
import couple3 from '../../images/couple/2.png'
import './style.css'

const Couple = () => {
    return(
        <div id="couple" className="about-wrap">
            <div className="couple-area section-padding pb-70">
                <Sectiontitle section={'Happy Couple'}/>
                <div className="container">
                    <div className="couple-wrap">
                        <div className="row">
                            <div className="col-lg-5 col-md-12 col-sm-12 couple-single">
                                <div className="couple-wrap couple-wrap-2">
                                    <div className="couple-img">
                                        <img src={couple1} alt="thumb"/>
                                    </div>
                                    <div className="couple-text">
                                        <div className="couple-content">
                                            <h3>Jessi Hammond</h3>
                                            <p>Hi I am Jessi. I am a medical student, but by the wedding I will be a doctor. I crochet in my free time and recently started 
                                                needle point - cross stitch and embroidery. I am excited for our wedding and to have you at our celebration!</p>
                                        </div>
                                        <div className="social-icon">
                                            <ul className="d-flex">
                                                <li><a href="https://www.facebook.com/jessi.hammond.14" ><span className="fa fa-facebook"></span></a></li>
                                                <li>< a href="mailto:j.hammond2013@gmail.com "><span className="fa fa-envelope"></span></a></li>
                                                <li><a href="https://www.linkedin.com/in/jessi-hammond-78a929162/"><span className="fa fa-linkedin"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 couple-single">
                                <div className="couple-shape">
                                   <img src={couple3} alt="shape"/>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12 col-sm-12 couple-single">
                                <div className="couple-wrap couple-wrap-3">
                                    <div className="couple-img couple-img-2">
                                        <img src={couple2} alt="thumb"/>
                                    </div>
                                    <div className="couple-text">
                                        <div className="couple-content">
                                            <h3>Michael Sanders</h3>
                                            <p>Hi I am Michael Sanders. Thank you for coming out to 
                                                our website. I am an aspiring web devloper who worked 
                                                hard on creating this site. I enjoy Presidents, 
                                                Football "Fly Eagles Fly," and video games - especically Zelda 
                                                and Pokemon. I love Jessi with all my heart and will be her best
                                                husband and partner in crime.</p>
                                        </div>
                                        <div className="social-icon">
                                        <ul className="d-flex">
                                                <li><a href="https://www.facebook.com/michael.sanders" ><span className="fa fa-facebook"></span></a></li>
                                                <li>< a href="mailto:mikesanderspsu@gmail,com "><span className="fa fa-envelope"></span></a></li>
                                                <li><a href="https://www.linkedin.com/in/michael-s-sanders-ii/"><span className="fa fa-linkedin"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             
        </div>
        
    )
}

export default Couple;