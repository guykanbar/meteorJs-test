import { Meteor } from 'meteor/meteor';
import './usecase/export-list';
import './usecase/exports-delete'
import { ExportsCollection } from './collections/export';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('exports', () => {
  return ExportsCollection.find()
})
