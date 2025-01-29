import React from 'react';
import styles from './TabContent.module.css';

const TabContent = ({ tabsData, activeTab }) => {
  return (
    <div className={styles.tabContentContainer}>
      {tabsData[activeTab].content}
    </div>
  );
};

export default TabContent;
