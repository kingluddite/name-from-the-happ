import { Meteor } from 'meteor/meteor';

// collections
// import './../imports/api/sections';
import { SectionsCollection } from './../imports/api/sections';

const fakeData = {
  name: 'GWDA-453',
  owner: '14508jwhglk',
  presentations: [
    {
      title: 'The Birds man',
      skip: false,
      next: false,
      onDeck: false,
      complete: false,
      group: false,
      presenters: [
        { name: 'john doe' }, { name: 'jane done' }, { name: 'john dow' },
      ],
      notes: '',
    },
  ],
};

Meteor.startup(() => {
  // insert fake data so we have something to play with
  SectionsCollection.insert(fakeData);
});
