import React from 'react';
import styles from './ModuleWrap.module.css';

const ModuleWrap = ({ children }) => {
  return <div className={styles.wrap}>{children}</div>;
};

export default ModuleWrap;
