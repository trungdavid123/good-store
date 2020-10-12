import React, { useEffect } from 'react';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

function Cart() {
  const state = useSelector((state) => state.cartReducer);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const showItems =
    state && state.length > 0 ? (
      state.map((item, i) => {
        return (
          <CartItem
            id={i}
            imgSrc={item.imgSrc}
            title={item.name}
            webId={item.webId}
            price={item.price}
            quantity={item.quantity}
          />
        );
      })
    ) : (
      <div style={{ padding: '2rem' }}>NO ITEMS IN CART</div>
    );

  return (
    <section id="cart_items">
      <div class="container mb-25r">
        <div class="breadcrumbs">
          <ol class="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li class="active">Shopping Cart</li>
          </ol>
        </div>
        <div class="table-responsive cart_info">
          <table class="table table-condensed">
            <thead>
              <tr class="cart_menu">
                <td class="image">Item</td>
                <td class="description"></td>
                <td class="price">Price</td>
                <td class="quantity">Quantity</td>
                <td class="total">Total</td>
                <td></td>
              </tr>
            </thead>
            <tbody>{showItems}</tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Cart;
