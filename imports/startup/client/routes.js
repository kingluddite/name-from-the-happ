import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// components
import App from './../../ui/components/App';
import Login from './../../ui/components/Login';
import Signup from './../../ui/components/Signup';
import Sections from './../../ui/components/Sections';
import NotFound from './../../ui/components/NotFound';

Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Login } />
        <Route path="/signup" component={ Signup} />
        <Route path="/sections" component={ Sections } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>,
    document.getElementById('react-root'),
  );
});
