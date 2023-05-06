import React from 'react'
import { TabPane} from 'reactstrap';
import RIP1 from '../../images/dead/dead-1.jpg'
import RIP2 from '../../images/dead/dead-2.jpg'
import RIP3 from '../../images/dead/dead-3.jpg'
import RIP4 from '../../images/dead/dead-4.jpg'
import RIP5 from '../../images/dead/dead-5.jpg'
import RIP6 from '../../images/dead/dead-6.jpg'
import {Link} from 'react-router-dom'
import './style.css'

const Dead = () => {
    
    return(             
                        
                    <div className='memorial'>
                        <div><Link to='/' aria-label="Next">
                                <i className="backMem">Back</i>
                            </Link></div>
                        <div className="section-title text-center">
                        <h2>Memorial</h2>
                        </div>
                        <p className='intro'>It will be a special day on May 27th. We would like to remember all of our family members who sadly couldn't make it. We know that they are watching us above</p>
                        <TabPane tabId="1">
                        <div className="Groomsman-wrap">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="person-wrap">
                                            <div className="dead-img">
                                                <img src={RIP1} alt=""/>
                                                <div className="social-list">
                                                    <p>1971-2020</p>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Thomas Roy Hammond</h3>
                                                <span>Jessi's Father</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="person-wrap">
                                            <div className="dead-img">
                                                <img src={RIP2} alt=""/>
                                                <div className="social-list">
                                                    <div className="social-list">
                                                        <p>1950-2022</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Marla Hammond</h3>
                                                <span>Jessi's Paternal Grandmother</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="person-wrap">
                                            <div className="dead-img">
                                                <img src={RIP3} alt=""/>
                                                <div className="social-list">
                                                    <div className="social-list">
                                                        <p>1944-2016</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Patricia Deffibaugh</h3>
                                                <span>Jessi's Maternal Grandmother</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="person-wrap">
                                            <div className="dead-img">
                                                <img src={RIP4} alt=""/>
                                                <div className="social-list">
                                                    <div className="social-list">
                                                        <p>1933-2017</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Joesph Rudolph Sanders</h3>
                                                <span>Mike's Paternal Grandfather</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="person-wrap">
                                            <div className="dead-img">
                                                <img src={RIP5} alt=""/>
                                                <div className="social-list">
                                                    <div className="social-list">
                                                        <p>1940-2018</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Barbara L. Lightfoot</h3>
                                                <span>Mike's Maternal Grandmother</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="person-wrap">
                                            <div className="dead-img">
                                                <img src={RIP6} alt=""/>
                                                <div className="social-list">
                                                    <div className="social-list">
                                                        <div className="social-list">
                                                            <p>1964-2019</p>
                                                        </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>David J. Brown</h3>
                                                <span>Mike's Maternal Uncle</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                    </div>
    )
}

export default Dead;