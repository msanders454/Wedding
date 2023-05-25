import React from 'react';
import {Link} from 'react-router-dom'


import AnchorLink from 'react-anchor-link-smooth-scroll'
import MobileMenu from '../../components/MobileMenu'

import './style.css'


const Header = (props) => {

    return(

        <div className="Header_root">
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-10">
                            <div className="logo">
                                <h2 id='title'>Michael <span><i className="fa fa-heart" aria-hidden="true"></i></span>Jessi</h2>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="header-menu d-lg-block d-none">
                                <ul className="mobail-menu d-flex">
                                    <li><AnchorLink href='#home'>Home</AnchorLink></li>
                                    <li><AnchorLink href='#couple'>Couple</AnchorLink></li>
                                    <li><AnchorLink href='#story'>Story</AnchorLink></li>
                                    <li><AnchorLink href='#people'>People</AnchorLink></li>
                                    <li><AnchorLink href='#event'>Events</AnchorLink></li>
                                    <li><AnchorLink href='#rsvp'>Songs and Gifts</AnchorLink></li>
                                    <li><Link to='schedule'>Schedule</Link></li>
                                    <li><Link to='faq'>FAQ</Link></li>
                                    <li><Link to='memorial'>Memorial</Link></li>
                                    <li><Link to='quiz'>Quiz</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-2">
                            <MobileMenu/>
                        </div>
                    </div>
                </div>
             </div>
      </div>
        
    )
}

export default Header;
