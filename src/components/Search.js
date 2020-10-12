import React from 'react';
import { Input } from 'antd';
import { connect, useDispatch } from 'react-redux';
import { SearchOutlined } from '@ant-design/icons';
import { search } from '../actions';
import { Link } from 'react-router-dom';

function Search({ search }) {
  const { Search } = Input;

  const dispatch = useDispatch();

  return (
    <Search
      placeholder="Search..."
      onSearch={(value) => {
        search(value);
      }}
      enterButton={
        <Link
          to={{ pathname: `/search` }}
          onClick={() => dispatch({ type: 'RESET_STATE' })}
        >
          <SearchOutlined style={{ fontSize: '1.6rem' }} />
        </Link>
      }
      style={{ width: 200 }}
    />
  );
}

export default connect(null, { search })(Search);
