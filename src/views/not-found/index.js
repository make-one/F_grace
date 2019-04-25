import React from 'react';
import PropTypes from 'prop-types';

const NoMatchPage = () => <div>页面不存在</div>;

NoMatchPage.propTypes = {
  location: PropTypes.object, // react router
};

export default NoMatchPage;
