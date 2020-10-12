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
      <div
        className={state.length > 1 ? '' : 'mb-44r'}
        style={{ padding: '2rem' }}
      >
        NO ITEMS IN CART
      </div>
    );

  return (
    <div className="container">
      <div class="shopping-cart-1">{showItems}</div>
      {state.length > 1 ? (
        <div className="check-out">
          <span>Check out</span>
        </div>
      ) : null}
    </div>
  );
}

export default Cart;
