import React, { useState } from 'react';
import TabButtons from './TabButtons';
import TabContent from './TabContent';
import styles from './TabComponent.module.css';

const TabComponent = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabSelection = (id) => {
    setActiveTab(id - 1);
  };

  return (
    <div className={styles.tabsComponentContainer}>
      <TabButtons
        onTabSelect={handleTabSelection}
        tabsData={tabsData}
        activeTab={activeTab}
      />
      <TabContent tabsData={tabsData} activeTab={activeTab} />
    </div>
  );
};

export default TabComponent;
