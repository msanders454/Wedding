import React, { Component } from "react";
import Particles from 'react-particles-js';

import stockShape2 from '../../images/hero/icon.png'
import stockShape3 from '../../images/hero/icon2.png'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'


class SimpleSlider extends Component {
    render() {
      var settings = {
        dots: false,
        arrows: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2500,
        fade:true
      };
      return (
          
        <Slider {...settings}>
          <div id="home" className="item1">
              <div className="container">
                  <div className="slide-content">
                      <div className="slide-subtitle">
                          <h4>WE'RE GETTING MARRIED</h4>
                      </div>
                      <div className="slide-title">
                          <h2>Save The Date</h2>
                      </div>
                      <div className="slide-text">
                          <p>May 27th 2023</p>
                      </div>
                  </div>
              </div>
              <Particles
                className="particaleWrapper"
                params={{
                    particles: {
                        number: {
                            value: 8,
                            density: {
                                enable: true,
                                value_area: 800
                            }
                        },
                        line_linked: {
                            enable: false
                        },
                        move: {
                            speed: 1.5,
                            out_mode: "in"
                        },
                        shape: {
                            type: [
                                "images",
                                "circle"
                            ],
                            images: [
                                {
                                    src: `${stockShape3}`,
                                    height: 13,
                                    width: 15,
                                },
                                {
                                    src: `${stockShape3}`,
                                    height: 20,
                                    width: 20
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 2,
                                    width: 46
                                },
                                {
                                    src: `${stockShape3}`,
                                    height: 29,
                                    width: 33,
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 10,
                                    width: 12,
                                },
                                {
                                    src: `${stockShape3}`,
                                    height: 21,
                                    width: 22
                                },
                                {
                                    src: `${stockShape3}`,
                                    height: 21,
                                    width: 22
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 5,
                                    width: 7
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 13,
                                    width: 15,
                                },
                                {
                                    src: `${stockShape3}`,
                                    height: 20,
                                    width: 20
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 2,
                                    width: 46
                                },
                                {
                                    src: `${stockShape3}`,
                                    height: 29,
                                    width: 33,
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 10,
                                    width: 12,
                                },
                                {
                                    src: `${stockShape3}`,
                                    height: 21,
                                    width: 22
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 21,
                                    width: 22
                                },
                                {
                                    src: `${stockShape3}`,
                                    height: 5,
                                    width: 7
                                },
                            ]
                        },
                        color: {
                            value: "#afba85"
                        },
                        size: {
                            value: 20,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 2,
                                size_min: 10,
                                sync: true
                            }
                        }

                    },
                    opacity: {
                        value: 0.4008530152163807,
                        random: false,
                        anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    interactivity: {
                        detect_on: "window",
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse"
                            },
                            onclick: {
                                enable: false,
                                mode: "bubble"
                            },
                            resize: true
                        },
                        modes: {
                            grab: {
                                distance: 400,
                                line_linked: {
                                    opacity: 1
                                }
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.4
                            },
                            push: {
                                particles_nb: 4
                            },
                            remove: {
                                particles_nb: 2
                            }
                        }
                    },
                    retina_detect: false
                }}
            />
          </div>
          <div className="item2">
            <div className="container">
                <div className="container">
                      <div className="slide-content">
                          <div className="slide-subtitle">
                              <h4>WE'RE GETTING MARRIED</h4>
                          </div>
                          <div className="slide-title">
                              <h2>Save The Date</h2>
                          </div>
                          <div className="slide-text">
                              <p>May 27th 2023</p>
                          </div>
                      </div>
                    </div>
                </div>
                <Particles
                className="particaleWrapper"
                params={{
                    particles: {
                        number: {
                            value: 8,
                            density: {
                                enable: true,
                                value_area: 800
                            }
                        },
                        line_linked: {
                            enable: false
                        },
                        move: {
                            speed: 1.5,
                            out_mode: "in"
                        },
                        shape: {
                            type: [
                                "images",
                                "circle"
                            ],
                            images: [
                                {
                                    src: `${stockShape3}`,
                                    height: 13,
                                    width: 15,
                                },
                                {
                                    src: `${stockShape3}`,
                                    height: 20,
                                    width: 20
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 2,
                                    width: 46
                                },
                                {
                                    src: `${stockShape3}`,
                                    height: 29,
                                    width: 33,
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 10,
                                    width: 12,
                                },
                                {
                                    src: `${stockShape3}`,
                                    height: 21,
                                    width: 22
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 21,
                                    width: 22
                                },
                                {
                                    src: `${stockShape3}`,
                                    height: 5,
                                    width: 7
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 13,
                                    width: 15,
                                },
                                {
                                    src: `${stockShape3}`,
                                    height: 20,
                                    width: 20
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 2,
                                    width: 46
                                },
                                {
                                    src: `${stockShape3}`,
                                    height: 29,
                                    width: 33,
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 10,
                                    width: 12,
                                },
                                {
                                    src: `${stockShape3}`,
                                    height: 21,
                                    width: 22
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 21,
                                    width: 22
                                },
                                {
                                    src: `${stockShape3}`,
                                    height: 5,
                                    width: 7
                                },
                            ]
                        },
                        color: {
                            value: "#afba85"
                        },
                        size: {
                            value: 20,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 2,
                                size_min: 10,
                                sync: true
                            }
                        }

                    },
                    opacity: {
                        value: 0.4008530152163807,
                        random: false,
                        anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    interactivity: {
                        detect_on: "window",
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse"
                            },
                            onclick: {
                                enable: false,
                                mode: "bubble"
                            },
                            resize: true
                        },
                        modes: {
                            grab: {
                                distance: 400,
                                line_linked: {
                                    opacity: 1
                                }
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.4
                            },
                            push: {
                                particles_nb: 4
                            },
                            remove: {
                                particles_nb: 2
                            }
                        }
                    },
                    retina_detect: false
                }}
            />
          </div>
          <div id="home" className="item3">
              <div className="container">
                  <div className="slide-content">
                      <div className="slide-subtitle">
                          <h4>WE'RE GETTING MARRIED</h4>
                      </div>
                      <div className="slide-title">
                          <h2>Save The Date</h2>
                      </div>
                      <div className="slide-text">
                          <p>May 27th 2023</p>
                      </div>
                  </div>
              </div>
              <Particles
                className="particaleWrapper"
                params={{
                    particles: {
                        number: {
                            value: 8,
                            density: {
                                enable: true,
                                value_area: 800
                            }
                        },
                        line_linked: {
                            enable: false
                        },
                        move: {
                            speed: 1.5,
                            out_mode: "in"
                        },
                        shape: {
                            type: [
                                "images",
                                "circle"
                            ],
                            images: [
                                {
                                    src: `${stockShape3}`,
                                    height: 13,
                                    width: 15,
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 20,
                                    width: 20
                                },
                                {
                                    src: `${stockShape3}`,
                                    height: 2,
                                    width: 46
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 29,
                                    width: 33,
                                },
                                {
                                    src: `${stockShape3}`,
                                    height: 10,
                                    width: 12,
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 21,
                                    width: 22
                                },
                                {
                                    src: `${stockShape3}`,
                                    height: 21,
                                    width: 22
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 5,
                                    width: 7
                                },
                                {
                                    src: `${stockShape3}`,
                                    height: 13,
                                    width: 15,
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 20,
                                    width: 20
                                },
                                {
                                    src: `${stockShape3}`,
                                    height: 2,
                                    width: 46
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 29,
                                    width: 33,
                                },
                                {
                                    src: `${stockShape3}`,
                                    height: 10,
                                    width: 12,
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 21,
                                    width: 22
                                },
                                {
                                    src: `${stockShape3}`,
                                    height: 21,
                                    width: 22
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 5,
                                    width: 7
                                },
                            ]
                        },
                        color: {
                            value: "#afba85"
                        },
                        size: {
                            value: 20,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 2,
                                size_min: 10,
                                sync: true
                            }
                        }

                    },
                    opacity: {
                        value: 0.4008530152163807,
                        random: false,
                        anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    interactivity: {
                        detect_on: "window",
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse"
                            },
                            onclick: {
                                enable: false,
                                mode: "bubble"
                            },
                            resize: true
                        },
                        modes: {
                            grab: {
                                distance: 400,
                                line_linked: {
                                    opacity: 1
                                }
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.4
                            },
                            push: {
                                particles_nb: 4
                            },
                            remove: {
                                particles_nb: 2
                            }
                        }
                    },
                    retina_detect: false
                }}
            />
          </div>
          <div id="home" className="item4">
              <div className="container">
                  <div className="slide-content">
                      <div className="slide-subtitle">
                          <h4>WE'RE GETTING MARRIED</h4>
                      </div>
                      <div className="slide-title">
                          <h2>Save The Date</h2>
                      </div>
                      <div className="slide-text">
                          <p>May 27th 2023</p>
                      </div>
                  </div>
              </div>
              <Particles
                className="particaleWrapper"
                params={{
                    particles: {
                        number: {
                            value: 8,
                            density: {
                                enable: true,
                                value_area: 800
                            }
                        },
                        line_linked: {
                            enable: false
                        },
                        move: {
                            speed: 1.5,
                            out_mode: "in"
                        },
                        shape: {
                            type: [
                                "images",
                                "circle"
                            ],
                            images: [
                                {
                                    src: `${stockShape3}`,
                                    height: 13,
                                    width: 15,
                                },
                                {
                                    src: `${stockShape3}`,
                                    height: 20,
                                    width: 20
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 2,
                                    width: 46
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 29,
                                    width: 33,
                                },
                                {
                                    src: `${stockShape3}`,
                                    height: 10,
                                    width: 12,
                                },
                                {
                                    src: `${stockShape3}`,
                                    height: 21,
                                    width: 22
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 21,
                                    width: 22
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 5,
                                    width: 7
                                },
                                {
                                    src: `${stockShape3}`,
                                    height: 13,
                                    width: 15,
                                },
                                {
                                    src: `${stockShape3}`,
                                    height: 20,
                                    width: 20
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 2,
                                    width: 46
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 29,
                                    width: 33,
                                },
                                {
                                    src: `${stockShape3}`,
                                    height: 10,
                                    width: 12,
                                },
                                {
                                    src: `${stockShape3}`,
                                    height: 21,
                                    width: 22
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 21,
                                    width: 22
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 5,
                                    width: 7
                                },
                            ]
                        },
                        color: {
                            value: "#afba85"
                        },
                        size: {
                            value: 20,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 2,
                                size_min: 10,
                                sync: true
                            }
                        }

                    },
                    opacity: {
                        value: 0.4008530152163807,
                        random: false,
                        anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    interactivity: {
                        detect_on: "window",
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse"
                            },
                            onclick: {
                                enable: false,
                                mode: "bubble"
                            },
                            resize: true
                        },
                        modes: {
                            grab: {
                                distance: 400,
                                line_linked: {
                                    opacity: 1
                                }
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.4
                            },
                            push: {
                                particles_nb: 4
                            },
                            remove: {
                                particles_nb: 2
                            }
                        }
                    },
                    retina_detect: false
                }}
            />
          </div>
          
        </Slider>

        
        
      );
    }
  }

export default SimpleSlider;

