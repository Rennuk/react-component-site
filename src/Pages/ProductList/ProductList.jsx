import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products_data from '../../assets/data/product_data';
import Tile from '../../Components/Tile/Tile';
import styles from './ProductList.module.css';

const ProductList = () => {
  const { menuCategory, subCategory } = useParams();
  const [productData, setProductData] = useState(products_data);

  const products = productData.filter(
    (product) => product.category === subCategory
  );
  const productList = products[0].product_list;

  console.log('products', productList);
  return (
    <div className={styles.tilesContainer}>
      {productList.map((footwear) => {
        return <Tile key={footwear.id} productData={footwear} />;
      })}
    </div>
  );
};

export default ProductList;
