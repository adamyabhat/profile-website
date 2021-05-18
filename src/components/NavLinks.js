import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = props => {

  return (
    <ul className="nav-links">
        {props.displayHome && 
        <li>
          <NavLink to='/'>HOME</NavLink>
        </li>}
        <li>
          <NavLink to='/about'>ABOUT</NavLink>
        </li>
        <li>
          <NavLink to='/work'>WORK</NavLink>
        </li>
        <li>
          <NavLink to='/projects'>PROJECTS</NavLink>
        </li>
        <li>
          <NavLink to='/website-info'>WEBSITE INFO</NavLink>
        </li>
        <li>
        </li>
    </ul>
  );
};

export default NavLinks;
