import React, { useEffect } from 'react';
import ItemForFeatures from './ItemForFeatures';
import { connect, useDispatch } from 'react-redux';
import { renderedItems, ADD_WISH, addCompare } from '../actions';

function FeaturesItem({ renderedItems, items, addCompare }) {
  useEffect(() => {
    renderedItems();
  }, [renderedItems]);

  const dispatch = useDispatch();

  const dispatchToState = (item, webId) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: item,
      webId: webId,
      quantity: 1,
    });
  };

  return (
    <div className="col-sm-9 padding-right">
      <div className="features_items">
        {/* <!--features_items--> */}
        <h2 className="title text-center">Features Items</h2>
        <div className="row1 row">
          {items.map((item, i) => {
            return (
              <ItemForFeatures
                key={i}
                item={item}
                title={item.name}
                webId={item.webId}
                id={item.id}
                imgSrc={item.imgSrc}
                price={item.price}
                dispatchToState={() => dispatchToState(item, item.webId)}
                dispatchToWish={() =>
                  dispatch({ type: ADD_WISH, payload: item, webId: item.webId })
                }
                dispatchToCompare={() => addCompare(item, item.webId, i)}
                recommend={item.recommend}
                date={item.date}
                condition={item.condition}
                check={item.check}
              />
            );
          })}
        </div>
      </div>
      {/* <!--features_items--> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { items: state.fetchItems.featuresItems };
};

export default connect(mapStateToProps, { renderedItems, addCompare })(
  FeaturesItem
);
