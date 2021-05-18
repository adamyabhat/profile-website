import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import NavLinks from '../components/NavLinks';
import SideDrawer from '../components/SideDrawer';
import Backdrop from '../components/Backdrop';
import './MainNavigation.css';
import Menu from '../assets/menu.svg'
import Home from '../assets/home.svg'

const MainNavigation = props => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks displayHome/>
        </nav>
      </SideDrawer>

      <Header>
        <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
         <img src={Menu} alt="more" width="30" height="30"/>
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">
          <img src={Home} alt="more" width="30" height="30"/>
          </Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </Header>
    </React.Fragment>
  );
};

export default MainNavigation;
