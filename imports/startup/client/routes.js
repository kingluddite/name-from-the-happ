/* eslint-disable max-len */
import React from 'react';
import { render } from 'react-dom';
import { Session } from 'meteor/session';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';

// components
import App from './../../ui/components/App';
import Login from './../../ui/components/Login';
import Signup from './../../ui/components/Signup';
import Sections from './../../ui/components/Sections';
// import NewSection from './../../ui/components/NewSection';
// import EditSection from './../../ui/components/EditSection';
// import ViewSection from './../../ui/components/ViewSection';
// import Presentations from './../../ui/components/Presentations';
// import NewPresentation from './../../ui/components/NewPresentation';
// import EditPresentation from './../../ui/components/EditPresentation';
// import ViewPresentation from './../../ui/components/ViewPresenation';
import NotFound from './../../ui/components/NotFound';

// const onEnterPresentationPage = (nextState) => {
//   Session.set('selectedPresentationId', nextState.params.id);
// };
//
// const onLeavePresentationPage = () => {
//   Session.set('selectedPresentationId', undefined);
// };
//
// const onEnterSectionPage = (nextState) => {
//   Session.set('selectedSectionId', nextState.params.id);
// };
//
// const onLeaveSectionPage = () => {
//   Session.set('selectedSectionId', undefined);
// };

const onAuthChange = (isAuthenticated, currentPagePrivacy) => {
  const isPublicPage = currentPagePrivacy === 'unauth';
  const isPrivatePage = currentPagePrivacy === 'auth';

  // if public page and logged in - let them in
  if (isPublicPage && isAuthenticated) {
    browserHistory.replace('/sections');
  } else if (isPrivatePage && !isAuthenticated) {
    // if private page and not logged in - kick them out
    browserHistory.replace('/');
  }
};

export const globalOnEnter = (nextState) => {
  const lastRoute = nextState.routes[nextState.routes.length - 1];
  Session.set('currentPagePrivacy', lastRoute.privacy);
};

export const globalOnChange = (prevState, nextState) => {
  globalOnEnter(nextState);
};

Meteor.startup(() => {
  Session.set('selectedSectionId', undefined);
  Session.set('selectedPresentationId', undefined);
  render(
    <Router history={ browserHistory }>
      <Route onEnter={globalOnEnter} onChange={globalOnChange}>
        <Route path="/" component={ App }>
          <IndexRoute component={ Login } privacy="unauth"/>
          <Route path="/signup" component={ Signup} privacy="unauth" />
          <Route path="/sections" component={ Sections } privacy="auth" />
          {/* <Route name="newSection" path="/sections/new" component={ NewSection } privacy="auth" /> */}
          {/* <Route name="editSection" path="/sections/:_id/edit" component={ EditSection } privacy="auth" /> */}
          {/* <Route name="viewSection" path="/sections/:_id" component={ ViewSection } privacy="auth" onEnter={onEnterSectionPage} onLeave={onLeaveSectionPage} /> */}
          {/* <Route path="/presentations" component={ Presentations } privacy="auth" /> */}
          {/* <Route name="newPresentation" path="/presentations/new" component={ NewPresentation } privacy="auth" /> */}
          {/* <Route name="editPresentation" path="/presentations/:_id/edit" component={ EditPresentation } privacy="auth" /> */}
          {/* <Route name="viewPresentation" path="/presentations/:_id" component={ ViewPresentation } onEnter={onEnterPresentationPage} onLeave={onLeavePresentationPage} privacy="auth" /> */}
          <Route path="*" component={ NotFound } />
      </Route>
    </Route>
    </Router>,
    document.getElementById('react-root'),
  );
});

export default onAuthChange;
