import React from 'react';
import PropTypes from 'prop-types';

// components
import PageHeader from './PageHeader';

const App = ({ children }) => (
  <div>
    <PageHeader />
    { children }
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
