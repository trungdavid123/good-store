import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { REMOVE_WISH, ADD_ITEM, ADD_ALL, addItem } from '../actions';
import { Link } from 'react-router-dom';
import { message } from 'antd';

function WishList() {
  const state = useSelector((state) => state.wish);

  const dispatch = useDispatch();

  const error = (value, name) => {
    message.error(`"${name}" ${value}`);
  };

  let combineButton = (name, i, webId) => {
    error('has been removed from the wishlist', name);
    dispatch({ type: REMOVE_WISH, id: i, webId: webId });
  };

  const succes = (value, name) => {
    message.success(`"${name}" ${value}`);
  };

  const succes1 = (value, name) => {
    message.success(`${name} ${value}`);
  };

  let combineAdd = (item, webId, name) => {
    succes('has been added to the cart', name);
    dispatch({ type: ADD_ITEM, payload: item, webId: webId });
  };

  let combineAddAll = (state, webId) => {
    dispatch({
      type: ADD_ITEM,
      payload: state,
      webId: webId,
    });
    succes1('has been added to the cart', 'Items');
  };

  const showItems = () => {
    if (state.length > 0) {
      return state.map((item, i) => {
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: '1rem 0',
            }}
            className="align-self-center"
          >
            <img style={{ height: '12rem' }} src={item.imgSrc} />
            <div className="wish-name">
              <p style={{ color: '#ffac40', fontWeight: 'bold' }}>
                {item.name}
              </p>
            </div>
            <div className="btn-group">
              <Link
                to={{
                  pathname: `/item/${item.id}`,
                  state: { renderedItem: item },
                }}
                className="btn btn btn-warning"
                style={{ marginLeft: '1rem' }}
              >
                See product
              </Link>
              <button
                className="btn btn btn-warning"
                style={{ marginLeft: '1rem' }}
                onClick={() => combineAdd(item, item.webId, item.name)}
              >
                Add to cart
              </button>
              <button
                className="btn btn btn-dark"
                style={{ marginLeft: '1rem' }}
                onClick={() => combineButton(item.name, i, item.webId)}
              >
                {' '}
                <i className="fas fa-times" style={{ fontSize: 'medium' }}></i>
              </button>
            </div>
          </div>
        );
      });
    }
    return <div className="mb-35r">No Favorite Items</div>;
  };

  const webId = state.map((item) => Number(item.webId));

  return (
    <div>
      <div className="container">
        <div>
          <h1 style={{ fontSize: '5rem' }}>My Wish List</h1>
          <p style={{ margin: '5rem 0 4rem', fontWeight: 'bold' }}>
            This is the description
          </p>
          {state.length <= 1 ? null : (
            <button
              style={{ margin: '0rem 0 2rem' }}
              type="button
          "
              className="btn btn-outline-secondary"
              onClick={() => combineAddAll(state, webId)}
            >
              Add all to cart
            </button>
          )}
        </div>
        {showItems()}
      </div>
    </div>
  );
}

export default WishList;
