import React from 'react';
import { Slide } from 'react-slideshow-image';

function Slider() {
  const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div className="item">
              <div className="col-sm-6 slide-content">
                <h1>
                  <span>E</span>-SHOPPER
                </h1>
                <h2>Free E-Commerce Template</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
                </p>
                <button type="button" className="btn btn-default get">
                  Get it now
                </button>
              </div>
              <div className="col-sm-6 slide-img">
                <img
                  src="images/home/girl1.jpg"
                  className="girl img-responsive"
                  alt=""
                />
                <img src="images/home/pricing.png" className="pricing" alt="" />
              </div>
            </div>
          </div>
          <div className="each-slide">
            <div className="item">
              <div className="col-sm-6 slide-content">
                <h1>
                  <span>E</span>-SHOPPER
                </h1>
                <h2>Free E-Commerce Template</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
                </p>
                <button type="button" className="btn btn-default get">
                  Get it now
                </button>
              </div>
              <div className="col-sm-6 slide-img">
                <img
                  src="images/home/girl1.jpg"
                  className="girl img-responsive"
                  alt=""
                />
                <img src="images/home/pricing.png" className="pricing" alt="" />
              </div>
            </div>
          </div>
          <div className="each-slide">
            <div className="item">
              <div className="col-sm-6 slide-content">
                <h1>
                  <span>E</span>-SHOPPER
                </h1>
                <h2>Free E-Commerce Template</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
                </p>
                <button type="button" className="btn btn-default get">
                  Get it now
                </button>
              </div>
              <div className="col-sm-6 slide-img">
                <img
                  src="images/home/girl1.jpg"
                  className="girl img-responsive"
                  alt=""
                />
                <img src="images/home/pricing.png" className="pricing" alt="" />
              </div>
            </div>
          </div>
        </Slide>
      </div>
    );
  };

  return (
    <section id="slider">
      <div className="container">
        <div className="row">{Slideshow()}</div>
      </div>
    </section>
  );
}

export default Slider;
