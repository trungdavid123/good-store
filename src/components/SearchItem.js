import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { ADD_ITEM, ADD_WISH, addCompare } from '../actions';
import { Link } from 'react-router-dom';
import { message } from 'antd';

function SearchItem({
  item,
  id,
  price,
  name,
  webId,
  imgSrc,
  addCompare,
  i,
  recommend,
  date,
  condition,
}) {
  let dispatch = useDispatch();

  const success = (name, value) => {
    message.success(`'${name}' ${value}`);
  };

  const warning = (value) => {
    message.warning(`${value}`);
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

  const combineCompare = (item, webId, i) => {
    if (compareData.length === 2) {
      addCompare(item, webId, i);
      setCompareChecked(false);
      JSON.stringify(localStorage.setItem(`compare${webId}`, false));
      if (compareChecked) {
        error(name, 'has been remove from the comparison');
      } else {
        warning('The limit is 2 items, please check your comparison');
      }
    } else {
      addCompare(item, webId, i);
      setCompareChecked(!compareChecked);
      JSON.stringify(localStorage.setItem(`compare${webId}`, !compareChecked));
      if (compareChecked === true) {
        error(name, 'has been remove from the comparison');
      }
      if (compareChecked === false) {
        success(name, 'has been added to the comparison');
      }
    }
  };

  let combineWish = () => {
    if (!wishChecked) {
      success(name, 'has been added to the wish list');
    } else {
      error(name, 'has been remove from the wishlist');
    }
    setWishChecked(!wishChecked);
    JSON.stringify(localStorage.setItem(`wish${webId}`, !wishChecked));
    dispatch({
      type: ADD_WISH,
      payload: item,
      webId: webId,
    });
  };

  const combineAdd = () => {
    succes('has been added to your cart');
    dispatch({
      type: ADD_ITEM,
      payload: item,
      webId: webId,
      quantity: 1,
    });
  };

  const succes = (value) => {
    message
      .loading('Action in progress..', 1.5)
      .then(() => message.success(`"${name}" ${value}`, 1));
  };

  const error = (value) => {
    message
      .loading('Action in progress..', 1.5)
      .then(() => message.error(`"${name}" ${value}`, 1));
  };

  let shortName = () => {
    let limit = name.length - 33;
    if (name.length > 36) {
      let res = name.slice(0, -limit);
      return res + '...';
    } else {
      return name;
    }
  };

  return (
    <div className="col-sm-3 col-xs-6">
      <div className="product-image-wrapper" style={{ width: '100%' }}>
        <div className="single-products">
          <div className="productinfo text-center">
            {recommend ? (
              <span class="recommend-1 badge-1 set">Recommend</span>
            ) : null}
            {condition ? (
              <div className="good-deal good-features">
                <span className="good-deal-content-good">Good</span>
                <span className="good-deal-content-text">Deal</span>
              </div>
            ) : null}
            <span className="date">{date}</span>

            <Link
              to={{
                pathname: `/item/${id}`,
                state: { renderedItem: item },
              }}
            >
              <img src={imgSrc} alt="" />
            </Link>
            <h2>{price} kr</h2>
            <p>{shortName()}</p>
            <button
              className="btn btn-default add-to-cart"
              onClick={() => combineAdd()}
            >
              <i className="fa fa-shopping-cart"></i>Add to cart
            </button>
          </div>
        </div>
        <div className="choose">
          <ul className="nav nav-pills nav-justified">
            <li>
              <a onClick={() => combineWish()}>
                {wishCheckedState === true ? (
                  <i className="fas fa-check"></i>
                ) : (
                  <i className="fa fa-plus-square"></i>
                )}
                Add to wishlist
              </a>
            </li>
            <li>
              <a onClick={() => combineCompare(item, webId, i)}>
                {compareCheckedState === true ? (
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

export default connect(null, { addCompare })(SearchItem);
