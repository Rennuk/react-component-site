import React from 'react';
import TabComponent from '../Components/TabsComponent/TabComponent';

//data
import tabs_data from '../assets/data/tabs_data';
import slider_data from '../assets/data/slider_data';
import Slider from '../Components/Slider/Slider';

const Home = () => {
  return (
    <div>
      <Slider sliderData={slider_data} sliderHeading={'Slider heading'} />
      <TabComponent tabsData={tabs_data} />
    </div>
  );
};

export default Home;
