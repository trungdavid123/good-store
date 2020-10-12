import React from 'react';
import { Link } from 'react-router-dom';
import { message } from 'antd';

function CategoryItem({
  name,
  price,
  imgSrc,
  id,
  dispatchItemToState,
  item,
  recommed,
  condition,
}) {
  const success = (value) => {
    message
      .loading('Action in progress..', 1.5)
      .then(() => message.success(`"${name}" ${value}`, 1));
  };

  let combineButton = () => {
    success('has been added to your cart');
    dispatchItemToState();
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
      <div className="product-image-wrapper">
        <div className="single-products">
          <div className="productinfo text-center">
            {recommed ? (
              <span className="recommend-1 badge-1">Recommend</span>
            ) : null}
            {condition ? (
              <div className="good-deal ">
                <span className="good-deal-content-good">Good</span>
                <span className="good-deal-content-text">Deal</span>
              </div>
            ) : null}
            <Link
              to={{ pathname: `/item/${id}`, state: { renderedItem: item } }}
            >
              <img src={imgSrc} alt="" />
            </Link>
            <h2>{price} kr</h2>
            <p>{shortName()}</p>
            <a
              onClick={() => combineButton()}
              className="btn btn-default add-to-cart"
            >
              <i className="fa fa-shopping-cart"></i>Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryItem;
