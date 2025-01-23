import React from 'react';
import styles from './TabButtons.module.css';

const TabButtons = ({ tabsData, onTabSelect, activeTab }) => {
  return (
    <ul className={styles.tabsContainer}>
      {tabsData.map((tab, index) => {
        return (
          <li
            className={`${index === activeTab ? styles.active : ''} tab_button`}
            key={tab.id}
            onClick={() => onTabSelect(tab.id)}
          >
            {tab.title}
          </li>
        );
      })}
    </ul>
  );
};

export default TabButtons;
