import React from 'react';
import classes from './Logo.css';
import logo from '../../assets/images/burger-logo.png';

const Logo = props => (
  <div className={classes.Logo}>
    <img src={logo} alt="My Logo" />
  </div>
)

export default Logo;