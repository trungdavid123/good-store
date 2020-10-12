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
    <tr>
      <td class="cart_product">
        <a href="">
          <img
            className="cart-img"
            src={imgSrc}
            style={{ width: '40%' }}
            alt=""
          />
        </a>
      </td>
      <td class="cart_description">
        <h4>
          <a href="">{title}</a>
        </h4>
        <p>Web ID: {webId}</p>
      </td>
      <td class="cart_price">
        <p>{price}kr.</p>
      </td>
      <td class="cart_quantity">
        <div class="cart_quantity_button">
          <a class="cart_quantity_up" onClick={() => increment(webId)}>
            {' '}
            +{' '}
          </a>
          <input
            class="cart_quantity_input"
            type="text"
            name="quantity"
            value={quantity}
            autocomplete="off"
            size="2"
          />
          <a class="cart_quantity_down" onClick={() => decrement(webId)}>
            {' '}
            -{' '}
          </a>
        </div>
      </td>
      <td class="cart_total">
        <p class="cart_total_price">{total()}kr.</p>
      </td>
      <td
        class="cart_delete"
        onClick={() => combineButton(id)}
        style={{ paddingRight: '9rem' }}
      >
        <a class="cart_quantity_delete">
          <i class="fa fa-times"></i>
        </a>
      </td>
    </tr>
  );
}

export default connect(null, { removeItem, increment, decrement })(CartItem);
