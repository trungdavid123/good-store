import React, { useEffect } from 'react';
import { removeCompare } from '../actions';
import { connect, useSelector } from 'react-redux';
import { message } from 'antd';

function Compare({ removeCompare }) {
  const state = useSelector((state) => state.compare);

  const success = (value, name) => {
    message.error(`"${name}" ${value}`);
  };

  let combineButton = (webId, i, name) => {
    success('has been removed from the comparison', name);
    removeCompare(webId, i);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div
        className="row"
        className={state.length !== 0 ? '' : 'compare-section'}
        style={{ margin: '0rem 0 4rem' }}
      >
        <h2>Product Compare</h2>
        {state.length < 1 ? (
          <div>No compare products</div>
        ) : (
          <table className="col-sm-12 tables-compare ">
            <tbody>
              <tr>
                <td
                  style={{ textAlign: 'center' }}
                  className="col-sm-1 td-header"
                >
                  Image
                </td>
                {state.map((item, i) => {
                  return (
                    <td className="col-sm-3">
                      <div className="">
                        {' '}
                        <span
                          className="remove-position"
                          onClick={() =>
                            combineButton(item.webId, i, item.name)
                          }
                        >
                          x
                        </span>
                        <div>
                          <img
                            className="img-po"
                            src={item.imgSrc}
                            style={{ width: '20%' }}
                          />
                        </div>
                      </div>
                    </td>
                  );
                })}
              </tr>
              <tr>
                <td
                  style={{ textAlign: 'center' }}
                  className="col-sm-1 td-header"
                >
                  Title
                </td>
                {state.map((item) => {
                  return (
                    <td className="col-sm-3" style={{ fontWeight: 'bold' }}>
                      {item.name}
                    </td>
                  );
                })}
              </tr>
              <tr>
                <td
                  style={{ textAlign: 'center' }}
                  className="col-sm-1 td-header"
                >
                  Price
                </td>
                {state.map((item) => {
                  return (
                    <td className="col-sm-3" style={{ fontWeight: 'bold' }}>
                      {item.price}
                    </td>
                  );
                })}
              </tr>
              <tr>
                <td
                  style={{ textAlign: 'center' }}
                  className="col-sm-1 td-header"
                >
                  Type
                </td>
                {state.map((item) => {
                  return (
                    <td className="col-sm-3" style={{ fontWeight: 'bold' }}>
                      {item.category}
                    </td>
                  );
                })}
              </tr>
              <tr>
                <td
                  style={{ textAlign: 'center' }}
                  className="col-sm-1 td-header"
                >
                  Brand
                </td>
                {state.map((item) => {
                  return (
                    <td className="col-sm-3" style={{ fontWeight: 'bold' }}>
                      {item.brand}
                    </td>
                  );
                })}
              </tr>
              <tr>
                <td
                  style={{ textAlign: 'center' }}
                  className="col-sm-1 td-header"
                >
                  Web Id
                </td>
                {state.map((item) => {
                  return (
                    <td className="col-sm-3" style={{ fontWeight: 'bold' }}>
                      {item.webId}
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default connect(null, { removeCompare })(Compare);
