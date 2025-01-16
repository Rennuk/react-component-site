import React, { useState } from 'react';
import Button from '../../Button/Button';
import styles from './NavContainer.module.css';
import Nav from '../Nav/Nav';
import nav_data from '../../../assets/data/nav_data';
import ModuleWrap from '../../ModuleWrap/ModuleWrap';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavContainer = () => {
  const [menuLevel, setMenuLevel] = useState(0);
  const [showWrap, setShowWrap] = useState(false);
  const [isPrimaryNavOpen, setIsPrimaryNavOpen] = useState(false);
  const [menuData, setMenuData] = useState(nav_data);
  const [menuHistory, setMenuHistory] = useState([]);
  const [menuCategory, setMenuCategory] = useState();

  const handleMenuToggle = () => {
    setMenuData(nav_data);
    setMenuLevel(0);
    setShowWrap((prevVal) => !prevVal);
    setIsPrimaryNavOpen((preValue) => !preValue);
  };

  const handleMenuSelection = (sublinks, navData) => {
    console.log(sublinks);
    console.log(navData);
    if (menuLevel === 0) {
      setMenuCategory(navData.category);
    }
    if (!navData.href) {
      setMenuData(sublinks);
      setMenuHistory([...menuHistory, menuData]);
      setMenuLevel((prevLevel) => prevLevel + 1);
    } else {
      handleMenuToggle();
    }
  };

  const handleBackToPreviousMenu = () => {
    if (menuHistory.length > 0) {
      const previousMenu = menuHistory[menuHistory.length - 1];
      setMenuData(previousMenu);
      setMenuHistory(menuHistory.slice(0, -1));
      setMenuLevel((prevLevel) => prevLevel - 1);
    }
  };

  return (
    <nav className={styles.navContainer}>
      <div className={styles.navButton}>
        <Button onClick={handleMenuToggle}>
          <GiHamburgerMenu />
        </Button>
      </div>

      {showWrap && (
        <ModuleWrap>
          {isPrimaryNavOpen && (
            <Nav
              menuData={menuData}
              menuLevel={menuLevel}
              onToggleMenu={handleMenuToggle}
              onMenuSelection={handleMenuSelection}
              onMenuBackSelect={handleBackToPreviousMenu}
              menuCategory={menuCategory}
            />
          )}
        </ModuleWrap>
      )}
    </nav>
  );
};

export default NavContainer;
