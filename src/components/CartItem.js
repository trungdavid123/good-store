import React from 'react';
import { connect } from 'react-redux';
import { removeItem, increment, decrement } from '../actions';
import { message } from 'antd';

function CartItem({
  title,
  webId,
  price,
  imgSrc,
  removeItem,
  increment,
  id,
  quantity,
  decrement,
}) {
  const total = () => {
    return price * quantity;
  };

  const error = (value, name) => {
    message.error(`"${name}" ${value}`, 1);
  };

  let combineButton = () => {
    error('has been removed from the comparison', title);
    removeItem(id);
  };

  return (
    <div class="item-1">
      <div class="buttons-1">
        <span class="delete-btn" onClick={() => combineButton(id)}>
          <i class="fas fa-trash-alt"></i>
        </span>
        <span class="like-btn"></span>
      </div>

      <div class="image-1">
        <img src={imgSrc} alt="" />
      </div>

      <div class="description-1">
        <span>{title}</span>
      </div>

      <div class="quantity-1">
        <button
          class="plus-btn btn-cart"
          type="button"
          name="button"
          onClick={() => decrement(webId)}
        >
          -
        </button>
        <input
          type="text"
          name="quantity"
          value={quantity}
          autocomplete="off"
          size="2"
        />
        <button
          class="minus-btn btn-cart"
          type="button"
          name="button"
          onClick={() => increment(webId)}
        >
          +
        </button>
      </div>

      <div class="total-price">{total()} kr</div>
    </div>
  );
}

export default connect(null, { removeItem, increment, decrement })(CartItem);
