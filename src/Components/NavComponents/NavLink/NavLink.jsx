import React from 'react';
import { Link } from 'react-router';
import styles from './NavLink.module.css';
import { MdOutlineChevronRight } from 'react-icons/md';
import nav_data from '../../../assets/data/nav_data';

const NavLink = ({ navLinkData, onMenuItemClick, children, menuCategory }) => {
  return (
    <>
      <Link
        className={styles.link}
        to={
          navLinkData.href ? `/${menuCategory}/${navLinkData.subcategory}` : '#'
        }
        onClick={() => onMenuItemClick(navLinkData.sub_links, navLinkData)}
      >
        {children}
        {!navLinkData.href && (
          <span className={styles.linkArrow}>
            <MdOutlineChevronRight />
          </span>
        )}
      </Link>
    </>
  );
};

export default NavLink;
