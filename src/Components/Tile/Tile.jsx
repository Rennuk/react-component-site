import React from 'react';
import styles from './Tile.module.css';
import { Link } from 'react-router';

const Tile = ({ productData }) => {
  console.log(productData);
  return (
    <div className={styles.tileContainer}>
      <Link>
        <img src="https://placehold.co/200x200" alt="" />
        <span className={styles.header}>£{productData.price}</span>
        <p className={styles.body}>{productData.name}</p>
        <p className={styles.footer}>{productData.colours.length} Colours</p>
      </Link>
    </div>
  );
};

export default Tile;
