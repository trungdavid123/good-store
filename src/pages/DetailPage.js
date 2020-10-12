import React from 'react';
import CategoryTabDetail from '../components/CategoryTabDetail';
import RecommendItem from '../components/RecommendItem';
import Aside from '../components/Aside';
import DetailItem from '../components/DetailItem';
import ErrorPage from './ErrorPage';

function DetailPage(props) {
  if (props !== undefined && props.location.state !== undefined) {
    const data = props.location.state.renderedItem;
    return (
      <section>
        <div className="container">
          <div className="row">
            <Aside />
            <DetailItem props={data} />
            <CategoryTabDetail />
            <RecommendItem />
          </div>
        </div>
      </section>
    );
  } else {
    return <ErrorPage />;
  }
}

export default DetailPage;
