import React, { Component } from 'react';
import CountDown from 'reactjs-countdown';
import './style.css'
 
class Saveday extends Component {

    render() {
        return(
            <div className="count-down-area">
                <div className="count-down-sectionparallax">
                    <div className="container">
                        <div className="count-down-item count-down-item2">
                            <div className="row">
                                <div className="col-12 col-md-4 section-area">
                                    <div className="section-sub"></div>
                                    <h2 className="big"><span>The Big Day Is.....</span> May 27th 2023</h2>
                                </div>
                                <div className="col-12 col-md-8 clock-area">
                                    <div className="count-down-clock">
                                        <CountDown
                                            deadline="May 27, 2023"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Saveday;