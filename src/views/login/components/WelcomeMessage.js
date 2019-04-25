import React, { Fragment } from 'react';
import logo from '@/static/images/logo.png';

const WelcomeMessage = () => {
  return (
    <Fragment>
      <img src={logo} alt="app logo" />
    </Fragment>
  );
};

export default WelcomeMessage;
