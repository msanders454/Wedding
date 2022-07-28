import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, } from 'reactstrap';
import classnames from 'classnames';
import Sectiontitle from '../section-title'
import bride1 from '../../images/groomsmen-bridesmaid/1.jpg'
import bride2 from '../../images/groomsmen-bridesmaid/2.jpg'
import bride3 from '../../images/groomsmen-bridesmaid/3.jpg'
import bride4 from '../../images/groomsmen-bridesmaid/4.jpg'
import bride5 from '../../images/groomsmen-bridesmaid/5.jpg'
import bride6 from '../../images/groomsmen-bridesmaid/7.jpg'
import bride7 from '../../images/groomsmen-bridesmaid/6.jpg'
import bride8 from '../../images/groomsmen-bridesmaid/8.jpg'
import bride9 from '../../images/groomsmen-bridesmaid/9.jpg'
import bride10 from '../../images/groomsmen-bridesmaid/10.jpg'
//import bride11 from '../../images/groomsmen-bridesmaid/11.jpg'
import bride12 from '../../images/groomsmen-bridesmaid/12.jpg'
import './style.css'

const People = (props) => {
    const [activeTab, setActiveTab] = useState('1');

        const toggle = tab => {
          if(activeTab !== tab) setActiveTab(tab);
        }
    return(

        <div id="people" className="person-area section-padding pb-70">
            <div className="container">
                <Sectiontitle section={'Wedding Party'}/>
                <div className="person-area-menu">
                    <div className="person-btn">
                        <Nav tabs>
                            <NavItem>
                            <NavLink
                                id="groom"
                                className={classnames({ active: activeTab === '1' })}
                                onClick={() => { toggle('1'); }}
                            >
                                Groomsman
                            </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink
                                id="bride"
                                className={classnames({ active: activeTab === '2' })}
                                onClick={() => { toggle('2'); }}
                            >
                                Bridemaids
                            </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                        <div className="Groomsman-wrap">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="person-wrap">
                                            <div className="person-img">
                                                <img src={bride1} alt=""/>
                                                <div className="social-list">
                                                    <p>Jessi, don't let him flood your house</p>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Bilal Ahmed</h3>
                                                <span>Best Friend</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="person-wrap">
                                            <div className="person-img">
                                                <img src={bride2} alt=""/>
                                                <div className="social-list">
                                                    <div className="social-list">
                                                        <p>That silly fool is actually getting married</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Jacob Kern</h3>
                                                <span>Best Friend</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="person-wrap">
                                            <div className="person-img">
                                                <img src={bride3} alt=""/>
                                                <div className="social-list">
                                                    <div className="social-list">
                                                        <p>I tried to teach Mike to get big muscles but he wouldn't listen to me</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Matt Rinaldi</h3>
                                                <span>Best friend</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="person-wrap">
                                            <div className="person-img">
                                                <img src={bride4} alt=""/>
                                                <div className="social-list">
                                                    <div className="social-list">
                                                        <p>Mike thinks he can really beat me in soccer.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Julian Brown</h3>
                                                <span>Cousin</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="person-wrap">
                                            <div className="person-img">
                                                <img src={bride5} alt=""/>
                                                <div className="social-list">
                                                    <div className="social-list">
                                                        <p>I was forced into this friendship.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Tony Zhang</h3>
                                                <span>Best Friend</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="person-wrap">
                                            <div className="person-img">
                                                <img src={bride6} alt=""/>
                                                <div className="social-list">
                                                    <div className="social-list">
                                                        <div className="social-list">
                                                            <p>How did we get on this site?</p>
                                                        </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Carla and Michael Sanders</h3>
                                                <span>Parents</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tabId="2">
                        <div className="Ceremony-wrap">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="person-wrap">
                                            <div className="person-img">
                                                <img src={bride7} alt=""/>
                                                <div className="social-list">
                                                    <div className="social-list">
                                                        <p>Jessi, your Mike better take care of you.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Rachael Marie Robison</h3>
                                                <span>Best Friend</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="person-wrap">
                                            <div className="person-img">
                                                <img src={bride8} alt=""/>
                                                <div className="social-list">
                                                    <div className="social-list">
                                                        <p>“Please be better than Hermaine and Ron.”</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Dianna Dzurov</h3>
                                                <span>Sister</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="person-wrap">
                                            <div className="person-img">
                                                <img src={bride9} alt=""/>
                                                <div className="social-list">
                                                    <div className="social-list">
                                                        <p>I got some tea for after the event</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Siya Bhagat</h3>
                                                <span>Best Friend</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="person-wrap">
                                            <div className="person-img">
                                                <img src={bride10} alt=""/>
                                                <div className="social-list">
                                                    <div className="social-list">
                                                        <p>It won't be a real party until halloween</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Mackenzie Hintze</h3>
                                                <span>Best Friend</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-4 col-md-6">
                                        <div className="person-wrap">
                                            <div className="person-img">
                                                <img src={bride12} alt=""/>
                                                <div className="social-list">
                                                    <div className="social-list">
                                                        <p>Michael Shawn Sanders the II, get me off this website</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Abigail Hammond</h3>
                                                <span>Parent</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </div>
        
    )
}

export default People;