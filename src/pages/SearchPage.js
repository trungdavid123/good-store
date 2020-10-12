import React, { useEffect, useState } from 'react';
import { Menu, Dropdown, Row, Col } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Aside from '../components/Aside';
import { useSelector, useDispatch, connect } from 'react-redux';
import SearchItem from '../components/SearchItem';
import {
  renderedItems,
  SET_RECOMMEND,
  SET_NEW,
  LOWEST_PRICE,
  HIGHEST_PRICE,
  TOP_SALES,
  LATEST_CLICK,
  HUNDTO300,
  THREETO500,
  FIVETO1000,
  THOUTO10000,
  addCompare,
} from '../actions';

function SearchPage() {
  const state = useSelector((state) => state.fetchItems);
  const value = useSelector((state) => state.search.value);
  const recommend = useSelector((state) => state.search.isRecommend);
  const newest = useSelector((state) => state.search.isNew);
  const lowestPrice = useSelector((state) => state.search.lowestPrice);
  const highestPrice = useSelector((state) => state.search.highestPrice);
  const latest = useSelector((state) => state.search.latest);
  const hundTo300 = useSelector((state) => state.search.hundTo300);
  const threeTo500 = useSelector((state) => state.search.threeto500);
  const fiveTo1000 = useSelector((state) => state.search.fiveTo1000);
  const thouTo10000 = useSelector((state) => state.search.thouTo10000);
  const topSales = useSelector((state) => state.search.topSales);
  const resetState = useSelector((state) => state.search.resetState);
  const [index, setIndex] = useState(9);
  const [index1, setIndex1] = useState(9);

  let combineState = state.recommendItems.concat(
    state.featuresItems,
    state.categoryItems
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    if (resetState) {
      setIndex(11);
      setIndex1(11);
    }
  }, [resetState]);

  const handleClick = ({ key }) => {
    if (Number(key) === 0) {
      dispatch({ type: SET_RECOMMEND });
    }
    if (Number(key) === 1) {
      dispatch({ type: SET_NEW });
    }
    if (Number(key) === 2) {
      dispatch({ type: LOWEST_PRICE });
    }
    if (Number(key) === 3) {
      dispatch({ type: HIGHEST_PRICE });
    }
    setIndex(Number(key));
    setIndex1(9);
  };

  const handleClick1 = ({ key }) => {
    if (Number(key) === 0) {
      dispatch({ type: HUNDTO300 });
    }
    if (Number(key) === 1) {
      dispatch({ type: THREETO500 });
    }
    if (Number(key) === 2) {
      dispatch({ type: FIVETO1000 });
    }
    if (Number(key) === 3) {
      dispatch({ type: THOUTO10000 });
    }
    setIndex1(Number(key));
    setIndex(9);
  };

  const menuItems = [
    {
      name: '100 kr to 300 kr',
    },
    {
      name: '300 kr to 500 kr',
    },
    {
      name: '500 kr to 1000 kr',
    },
    {
      name: '1000 kr to 10000 kr',
    },
  ];

  const menuItemsSortBy = [
    {
      name: 'Recommend',
    },
    {
      name: 'Good Deal',
    },
    {
      name: 'Lowest Price',
    },
    {
      name: 'Highest Price',
    },
  ];

  const showItems = () => {
    return menuItemsSortBy.map((item, i) => {
      return (
        <Menu.Item key={i}>
          {' '}
          {i === index ? (
            <i class="fas fa-dot-circle"></i>
          ) : (
            <i class="far fa-dot-circle"></i>
          )}{' '}
          &nbsp;&nbsp;{item.name}
        </Menu.Item>
      );
    });
  };

  const menuSortBy = <Menu onClick={handleClick}>{showItems()}</Menu>;
  const menuPirce = (
    <Menu onClick={handleClick1}>
      {menuItems.map((item, i) => {
        return (
          <Menu.Item key={i}>
            {' '}
            {i === index1 ? (
              <i class="fas fa-dot-circle"></i>
            ) : (
              <i class="far fa-dot-circle"></i>
            )}{' '}
            &nbsp;&nbsp;{item.name}
          </Menu.Item>
        );
      })}
    </Menu>
  );

  const topSalesOnclick = () => {
    dispatch({ type: TOP_SALES });
  };

  const latestClick = () => {
    dispatch({ type: LATEST_CLICK });
  };

  const showingResult = () => {
    if (combineState.length > -1 && value !== '' && value.trim()) {
      let filteredValue = combineState.filter(
        (item) =>
          item.name.toLowerCase().indexOf(value.trim().toLowerCase()) > -1
      );

      const newResult = filteredValue.filter((item) => {
        if (recommend) {
          return item.recommend === true;
        } else if (newest) {
          return item.condition === true;
        } else if (lowestPrice) {
          return combineState.sort((a, b) => {
            return a.price - b.price;
          });
        } else if (highestPrice) {
          let sort = combineState.sort((a, b) => {
            return b.price - a.price;
          });
          return sort;
        } else if (topSales) {
          return combineState.sort((a, b) => {
            return b.sold - a.sold;
          });
        } else if (latest) {
          return combineState.sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
          });
        } else if (hundTo300) {
          return item.price <= 300;
        } else if (threeTo500) {
          return item.price >= 300 && item.price <= 500;
        } else if (fiveTo1000) {
          return item.price >= 500 && item.price <= 1000;
        } else if (thouTo10000) {
          return item.price >= 1000 && item.price <= 10000;
        } else {
          return filteredValue;
        }
      });

      const result = newResult.map((item, i) => {
        return (
          <SearchItem
            item={item}
            id={item.id}
            price={item.price}
            name={item.name}
            webId={item.webId}
            imgSrc={item.imgSrc}
            i={i}
            recommend={item.recommend}
            date={item.date}
            condition={item.condition}
          />
        );
      });
      return result.length > 0 ? (
        result
      ) : (
        <div className="pd-1r" style={{ marginBottom: '35rem' }}>
          NO MATCHING ITEMS
        </div>
      );
    } else {
      return <div className="pd-1r">NO MATCHING ITEMS</div>;
    }
  };

  return (
    <div className={value.length === 0 ? 'abc' : 'row'}>
      <Aside />
      <Col span={20} className="mw-100">
        <h3 className="text-center">SHOWING RESULT FOR "{value}"</h3>
      </Col>
      <Row justify="left" style={{ marginTop: '5rem', marginBottom: '1rem' }}>
        <Col span={3} xs={4} style={{ marginLeft: '2.5rem' }}>
          {' '}
          <a
            className="ant-dropdown-link"
            onClick={() => topSalesOnclick()}
            style={{ color: '#d46b08', fontWeight: 'bold' }}
          >
            TOP SALES
          </a>
        </Col>
        <Col span={3} xs={4}>
          {' '}
          <a
            className="ant-dropdown-link"
            onClick={() => latestClick()}
            style={{ color: '#d46b08', fontWeight: 'bold' }}
          >
            LATEST
          </a>
        </Col>
        <Col span={3} xs={5}>
          {' '}
          <Dropdown overlay={menuSortBy} trigger={['click']}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
              style={{ color: '#d46b08', fontWeight: 'bold' }}
            >
              SORT BY <DownOutlined />
            </a>
          </Dropdown>
        </Col>
        <Col span={3} xs={4}>
          {' '}
          <Dropdown overlay={menuPirce} trigger={['click']}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
              style={{ color: '#d46b08', fontWeight: 'bold' }}
            >
              PRICE <DownOutlined />
            </a>
          </Dropdown>
        </Col>
        <Col span={10} xs={4}>
          <p style={{ color: 'black', fontWeight: 'bold', float: 'right' }}>
            {value.trim() ? showingResult().length : 0} items
          </p>
        </Col>
      </Row>
      <div style={{ padding: '1rem' }}>{showingResult()}</div>
    </div>
  );
}

export default connect(null, { renderedItems, addCompare })(SearchPage);
