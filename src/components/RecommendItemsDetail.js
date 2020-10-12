import React from 'react';

function RecommendItemsDetail() {
  return (
    <div className="recommended_items">
      <h2 className="title text-center">recommended items</h2>
      <div
        id="recommended-item-carousel"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="item active">
            <div className="col-sm-4">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/recommend1.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <button
                      type="button"
                      className="btn btn-default add-to-cart"
                    >
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/recommend2.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <button
                      type="button"
                      className="btn btn-default add-to-cart"
                    >
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/recommend3.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <button
                      type="button"
                      className="btn btn-default add-to-cart"
                    >
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="col-sm-4">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/recommend1.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <button
                      type="button"
                      className="btn btn-default add-to-cart"
                    >
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/recommend2.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <button
                      type="button"
                      className="btn btn-default add-to-cart"
                    >
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/recommend3.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <button
                      type="button"
                      className="btn btn-default add-to-cart"
                    >
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="left recommended-item-control"
          href="#recommended-item-carousel"
          data-slide="prev"
        >
          <i className="fa fa-angle-left"></i>
        </a>
        <a
          className="right recommended-item-control"
          href="#recommended-item-carousel"
          data-slide="next"
        >
          <i className="fa fa-angle-right"></i>
        </a>
      </div>
    </div>
  );
}

export default RecommendItemsDetail;
