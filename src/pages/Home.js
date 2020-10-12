import React from 'react';
import Slider from '../components/Slider';
import Aside from '../components/Aside';
import FeaturesItem from '../components/FeaturesItem';
import RecommendItem from '../components/RecommendItem';
import Category from '../components/Category';

function Home() {
  return (
    <div>
      <Slider />
      <section>
        <Aside />
        <FeaturesItem />
        <Category />
        <RecommendItem />
      </section>
    </div>
  );
}

export default Home;
