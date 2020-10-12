import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { connect } from 'react-redux';
import { addItem } from '../actions';
import { Link } from 'react-router-dom';
import { message } from 'antd';

function RecommendItem({ items, addItem }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const success = (value, name) => {
    message
      .loading('Action in progress..', 1.5)
      .then(() => message.success(`"${name}" ${value}`, 1));
  };

  let combineButton = (el, webId, value, name) => {
    success('has been added to your cart', name);
    addItem(el, webId, value);
  };

  let shortName = (name) => {
    let limit = name.length - 40;
    if (name.length > 39) {
      let res = name.slice(0, -limit);
      return res + '...';
    } else {
      return name;
    }
  };

  const showItems =
    items.length &&
    items.map((el, i) => {
      return (
        <div
          onClick={() => window.scrollTo(0, 0)}
          key={i}
          className="product-image-wrapper"
          style={{ paddingLeft: '1.2rem' }}
        >
          <div className="single-products">
            <div className="productinfo text-center">
              <span
                className="recommend-1 badge-1"
                style={{ fontSize: '1rem' }}
              >
                Recommend
              </span>
              <span className="date">{el.date}</span>
              {el.condition ? (
                <div className="good-deal">
                  <span className="good-deal-content-good">Good</span>
                  <span className="good-deal-content-text">Deal</span>
                </div>
              ) : null}

              <Link
                to={{
                  pathname: `/item/${el.id}`,
                  state: { renderedItem: el },
                }}
              >
                <img src={el.imgSrc} alt="" />
              </Link>
              <h2>{el.price} kr</h2>
              <p>{shortName(el.name)}</p>
              <a
                onClick={() => combineButton(el, el.webId, 1, el.name)}
                className="btn btn-default add-to-cart"
              >
                <i className="fa fa-shopping-cart"></i>Add to cart
              </a>
            </div>
          </div>
        </div>
      );
    });

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div>
      <h2 className="title text-center">recommended items</h2>
      <div className="recommend-section" style={{ marginLeft: '10rem' }}>
        <Carousel
          ssr
          swipeable={true}
          draggable={false}
          partialVisbile
          itemClass="image-item"
          responsive={responsive}
        >
          {showItems}
        </Carousel>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { items: state.fetchItems.recommendItems };
};

export default connect(mapStateToProps, { addItem })(RecommendItem);
