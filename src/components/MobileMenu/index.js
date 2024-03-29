import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {Link} from 'react-router-dom'
import './style.css';

export default class MobileMenu extends Component {

    state = {
        isMenuShow: false,
        isOpen: false,
    }

    menuHandler = () => {
        this.setState({
            isMenuShow: !this.state.isMenuShow
        })
    }

    setIsOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {

        const { isMenuShow } = this.state;

        return (
            <div>
                <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                    {/* <div className="clox" onClick={this.menuHandler}>Close Me</div> */}
                    <div className="logo2">
                        <h2 id='title'><Link to='/'>Jessi & Michael</Link></h2>
                    </div>
                    <ul className="responsivemenu">
                        <li><Link to='/'>Home</Link></li>
                        <li><AnchorLink href='#couple'>Couple</AnchorLink></li>
                        <li><AnchorLink href='#story'>Story</AnchorLink></li>
                        <li><AnchorLink href='#people'>People</AnchorLink></li>
                        <li><AnchorLink href='#event'>Events</AnchorLink></li>
                        <li><AnchorLink href='#rsvp'>Rsvp</AnchorLink></li>
                        <li><Link to='schedule'>Schedule</Link></li>
                        <li><Link to='faq'>FAQ</Link></li>
                        <li><Link to='memorial'>Memorial</Link></li>
                        <li><Link to='quiz'>Quiz</Link></li>
                    </ul>
                    
                </div>

                <div className="showmenu" onClick={this.menuHandler}><i className="fa fa-bars" aria-hidden="true"></i></div>         
            </div>
        )
    }
}
