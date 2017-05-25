import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';
import { browserHistory } from 'react-router';
import onAuthChange from './../imports/startup/client/routes';

import './../imports/startup/client';
// collections
import './../imports/api/sections';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  const currentPagePrivacy = Session.get('currentPagePrivacy');

  // console.log('currentPagePrivacy', currentPagePrivacy);
  onAuthChange(isAuthenticated, currentPagePrivacy);
});

Tracker.autorun(() => {
  const selectedSectionId = Session.get('selectedSectionId');

  if (selectedSectionId) {
    browserHistory.replace(`/sections/${selectedSectionId}`);
  }
});

Tracker.autorun(() => {
  const selectedPresentationId = Session.get('selectedPresentationId');

  if (selectedPresentationId) {
    browserHistory.replace(`/presentations/${selectedPresentationId}`);
  }
});
