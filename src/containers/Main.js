import React from 'react';
import PropTypes from 'prop-types';
import { HelmetProvider } from 'react-helmet-async';

import CustomizedToolbar from '../components/CustomizedToolbar';
// import SideBar from '../components/Template/SideBar';
// import ScrollToTop from '../components/Template/ScrollToTop';

const Main = (props) => (
  <HelmetProvider>
    {/* <ScrollToTop /> */}
    <div id="wrapper">
      <CustomizedToolbar />
      <div id="main">
        {props.children}
      </div>
      {/* {props.fullPage ? null : <SideBar />} */}
    </div>
  </HelmetProvider>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
};

export default Main;
