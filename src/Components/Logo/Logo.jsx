import React from 'react';
import styles from './logo.module.css';
import { CgAdidas } from 'react-icons/cg';
import { Link } from 'react-router';

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <Link to="/">
        <CgAdidas />
      </Link>
    </div>
  );
};

export default Logo;
