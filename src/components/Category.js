import React, { useState } from 'react';
import CategoryItem from './CategoryItem';
import { connect } from 'react-redux';
import { addItem } from '../actions';

function Category({ categoryItems, addItem }) {
  const [index, setIndex] = useState(0);

  const menus = [
    'Chinese-Food',
    'Japanese-Food',
    'Korea-Food',
    'Thailand-Food',
    'Vietnam-Food',
  ];

  const showMenu = (menus) => {
    const data = menus.map((menu, i) => {
      return (
        <li key={i} className={index === i ? 'active' : ''}>
          <a onClick={() => handleItems(i)} href="#tshirt" data-toggle="tab">
            {menu}
          </a>
        </li>
      );
    });
    return data;
  };

  const handleItems = (id) => {
    setIndex(id);
  };

  const renderCategoryItems = categoryItems.map((el, i) => {
    if (el.positionId === index) {
      return (
        <CategoryItem
          key={i}
          item={el}
          dispatchItemToState={() => addItem(el, el.webId, 1)}
          name={el.name}
          id={i}
          imgSrc={el.imgSrc}
          price={el.price}
          recommed={el.recommed}
          condition={el.condition}
        />
      );
    }
  });

  return (
    <div className="category-tab">
      <div className="col-sm-12">
        <ul className="nav nav-tabs">{showMenu(menus)}</ul>
        {renderCategoryItems}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { categoryItems: state.fetchItems.categoryItems };
};

export default connect(mapStateToProps, { addItem })(Category);
