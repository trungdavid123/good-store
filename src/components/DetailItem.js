import React, { useState, useEffect } from 'react';
import { ADD_ITEM } from '../actions';
import { useDispatch } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { message } from 'antd';

function DetailItem({ props }) {
  const [value, setValue] = useState(1);
  const [clickedImage, setClickedImage] = useState(false);
  const [imageClick, setImageClick] = useState('');
  const [index, setIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();

  const dispatchToState = (item, webId, quantity) => {
    dispatch({
      type: ADD_ITEM,
      payload: item,
      webId: webId,
      quantity: quantity,
    });
    succes('has been added to the cart');
  };

  const succes = (value) => {
    message
      .loading('Action in progress..', 1.5)
      .then(() => message.success(`"${props.name}" ${value}`, 1));
  };

  const changeImageClick = (img, i) => {
    if (index === i) {
      setClickedImage(false);
    } else {
      setClickedImage(true);
      setImageClick(img);
      setIndex(i);
    }
  };

  const showItems = props.detail.map((img, i) => {
    return (
      <div key={i}>
        <img
          className="mini-carousel-img"
          alt={img.name}
          style={{ width: '100px', height: '100px', objectFit: 'cover' }}
          src={i === index ? props.imgSrc : img.imgSrc}
          onClick={() => changeImageClick(img.imgSrc, i)}
        />
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
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
  };

  return (
    <div className="col-sm-9 padding-right">
      <div className="product-details">
        <div className="col-sm-5" style={{ textAlign: 'center' }}>
          <div className="view-product">
            <TransformWrapper>
              <TransformComponent>
                <img
                  src={clickedImage ? imageClick : props.imgSrc}
                  alt={props.name}
                />
              </TransformComponent>
            </TransformWrapper>
            <h3>Zoom</h3>
          </div>
          <Carousel
            ssr
            swipeable={false}
            draggable={false}
            partialVisbile
            itemClass="image-item"
            responsive={responsive}
          >
            {showItems}
          </Carousel>
        </div>
        <div className="col-sm-7">
          <div className="product-information">
            <img
              src="images/product-details/new.jpg"
              className="newarrival"
              alt=""
            />
            <h2>{props.name}</h2>
            <p>Web ID: {props.webId}</p>
            <img src="images/product-details/rating.png" alt="" />
            <span>
              <span>{props.price} kr</span>
              <label>Quantity:</label>
              <input
                onChange={(e) => setValue(e.target.value.replace(/\D/, ''))}
                value={value}
                maxLength="2"
                min="0"
                max="60"
              />
              <button
                type="button"
                className="btn btn-fefault cart"
                onClick={() =>
                  dispatchToState(props, props.webId, Number(value))
                }
              >
                <i className="fa fa-shopping-cart"></i>&nbsp; Add to cart
              </button>
            </span>
            <p>
              <b>Availability:</b> In Stock
            </p>
            <p>
              <b>Category:</b> {props.category}
            </p>
            <p>
              <b>Brand:</b> {props.brand}
            </p>
            <a href="/#">
              <img
                src="images/product-details/share.png"
                className="share img-responsive"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailItem;
