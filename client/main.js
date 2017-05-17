import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import onAuthChange from './../imports/startup/client/routes';

import './../imports/startup/client';
// collections
import './../imports/api/sections';


Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});
