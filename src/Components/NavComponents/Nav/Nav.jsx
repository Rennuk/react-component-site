import React from 'react';
import Button from '../../Button/Button';

import styles from './Nav.module.css';
import NavLink from '../NavLink/NavLink';

const Nav = ({
  onToggleMenu,
  onMenuSelection,
  menuData,
  menuLevel,
  onMenuBackSelect,
  menuCategory,
}) => {
  return (
    <div className={`${styles.menuItemContainer}`}>
      <div className={styles.menuNavBtn}>
        {menuLevel >= 1 ? (
          <Button onClick={() => onMenuBackSelect(menuLevel)}>back</Button>
        ) : null}

        <Button onClick={onToggleMenu} className={styles.closeBtn}>
          &times;
        </Button>
      </div>
      <div>
        <ul>
          {menuData.map((menuItem) => {
            return (
              <NavLink
                key={menuItem.id}
                onMenuItemClick={onMenuSelection}
                navLinkData={menuItem}
                menuCategory={menuCategory}
              >
                {menuItem.link_name}
              </NavLink>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
