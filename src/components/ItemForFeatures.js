import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { message } from 'antd';
import { useSelector } from 'react-redux';

function ItemForFeatures({
  title,
  item,
  price,
  imgSrc,
  date,
  webId,
  id,
  dispatchToState,
  dispatchToWish,
  dispatchToCompare,
  recommend,
  condition,
}) {
  const success = (name, value) => {
    message.success(`'${name}' ${value}`);
  };

  const error = (name, value) => {
    message.error(`'${name}' ${value}`);
  };

  const warning = (value) => {
    message.warning(`${value}`);
  };

  let combineButton = () => {
    success(title, 'has been added to the cart');
    dispatchToState();
  };

  let wishCheckedState = JSON.parse(localStorage.getItem(`wish${webId}`))
    ? JSON.parse(localStorage.getItem(`wish${webId}`))
    : false;

  let compareCheckedState = JSON.parse(localStorage.getItem(`compare${webId}`))
    ? JSON.parse(localStorage.getItem(`compare${webId}`))
    : false;

  const [wishChecked, setWishChecked] = useState(wishCheckedState);

  const [compareChecked, setCompareChecked] = useState(compareCheckedState);

  let compareData = useSelector((state) => state.compare);

  const showClick = () => {
    if (compareData.length === 2) {
      dispatchToCompare();
      setCompareChecked(false);
      JSON.stringify(localStorage.setItem(`compare${webId}`, false));
      if (compareChecked) {
        error(title, 'has been remove from the comparison');
      } else {
        warning('The limit is 2 items, please check your comparison');
      }
    } else {
      dispatchToCompare();
      setCompareChecked(!compareChecked);
      JSON.stringify(localStorage.setItem(`compare${webId}`, !compareChecked));
      if (compareChecked === true) {
        error(title, 'has been remove from the comparison');
      }
      if (compareChecked === false) {
        success(title, 'has been added to the comparison');
      }
    }
  };

  let combineWish = () => {
    if (!wishChecked) {
      success(title, 'has been added to the wish list');
    } else {
      error(title, 'has been remove from the wishlist');
    }
    setWishChecked(!wishChecked);
    JSON.stringify(localStorage.setItem(`wish${webId}`, !wishChecked));
    dispatchToWish();
  };

  return (
    <div className="col-sm-4 col-xs-6" style={{ marginLeft: '-10px' }}>
      <div className="product-image-wrapper p-i-w">
        <div className="single-products">
          <div className="productinfo text-center">
            {recommend ? (
              <span className="recommend-1 badge-1">Recommend</span>
            ) : null}
            {condition ? (
              <div className="good-deal good-features">
                <span className="good-deal-content-good">Good</span>
                <span className="good-deal-content-text">Deal</span>
              </div>
            ) : null}
            <span className="date">{date}</span>
            <Link
              to={{ pathname: `/item/${id}`, state: { renderedItem: item } }}
            >
              <img src={imgSrc} alt="" />
            </Link>
            <h2>{price} kr</h2>
            <p>{title}</p>
            <button
              onClick={() => combineButton()}
              className="btn btn-default add-to-cart"
            >
              <i className="fa fa-shopping-cart"></i>Add to cart
            </button>
          </div>
        </div>
        <div className="choose">
          <ul className="nav nav-pills nav-justified">
            <li>
              <a onClick={() => combineWish()} style={{ cursor: 'pointer' }}>
                {wishChecked === true ? (
                  <i className="fas fa-check"></i>
                ) : (
                  <i className="fa fa-plus-square"></i>
                )}
                Add to wishlist
              </a>
            </li>
            <li>
              <a onClick={() => showClick(webId)}>
                {compareChecked === true ? (
                  <i className="fas fa-check"></i>
                ) : (
                  <i className="fa fa-plus-square"></i>
                )}
                Add to compare
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ItemForFeatures;
