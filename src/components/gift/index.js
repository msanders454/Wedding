import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import gift1 from '../../images/gift/2.png'
//import gift2 from '../../images/gift/3.png'
//import gift3 from '../../images/gift/4.png'
//import gift4 from '../../images/gift/2.png'
//import './style.css'


class Gift extends Component {
    render() {
      var settings = {
        dots: false,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:1500,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ] 
      };
      return (
          <div className="gift-area">
              <div className="container">
                    <div className="col-12">
                      <div className="section-title text-center">
                          <h2>Gift Registration</h2>
                          <p className="gift-info">Looking for gift ideas? You can select an item from the list below.  
                            Alternatively, you can also donate to our honeymoon fund. We are planning on 
                            honeymooning in Seattle Washington</p>

                            <p className="gift-info">Uh Oh. The Gift Information is empty. Don't worry
                              Mike and Jessi are setting up the registry. Come back soon of more
                              Details
                            </p>
                      </div>
                      <Slider {...settings}></Slider>
                  </div>
                  {/*
                  <div className="row gift-item">
                      <div className="col-lg-12">
                        <Slider {...settings}>
                            <div className="item">
                                <img src={gift1} alt=""/>
                            </div>
                            <div className="item">
                                <img src={gift2} alt=""/>
                            </div>
                            <div className="item">
                                <img src={gift3} alt=""/>
                            </div>
                            <div className="item">
                                <img src={gift4} alt=""/>
                            </div>
                            <div className="item">
                                <img src={gift1} alt=""/>
                            </div>
                            <div className="item">
                                <img src={gift2} alt=""/>
                            </div>
                            <div className="item">
                                <img src={gift3} alt=""/>
                            </div>
                            <div className="item">
                                <img src={gift4} alt=""/>
                            </div>
                            </Slider>
                      </div>
                  </div> */}
              </div>
          </div>
      );
    }
  }

export default Gift;