import React, { useState } from 'react';
import styles from './Slider.module.css';

const Slider = ({ sliderData, sliderHeading }) => {
  const [activeSlider, setActiveSlider] = useState(1);

  const handleSliderMove = (event) => {
    const arrow = Number(event.target.dataset.navigation);

    if (arrow === 1) {
      if (activeSlider === 1) {
        setActiveSlider(sliderData.length);
        return;
      }
      setActiveSlider((preVal) => preVal - 1);
    } else {
      if (activeSlider === sliderData.length) {
        setActiveSlider(1);
        return;
      }
      setActiveSlider((preVal) => preVal + 1);
    }
  };

  return (
    <section className={styles.sliderContainer}>
      <h2 className={styles.sliderHeading}>{sliderHeading}</h2>
      <div className={styles.slidesContainer}>
        {sliderData.map((slide) => {
          return (
            <div
              className={`${styles[`slider_${activeSlider}`]}`}
              key={slide.id}
            >
              {slide.title}
            </div>
          );
        })}
      </div>
      <div className={styles.dotsContainer}>
        <ul>
          {sliderData.map((slide) => {
            return <li key={slide.id}></li>;
          })}
        </ul>
      </div>
      <div className={styles.arrowsContainer} onClick={handleSliderMove}>
        <div data-navigation="1">&#10094;</div>
        <div data-navigation="2">&#10095;</div>
      </div>
    </section>
  );
};

export default Slider;
