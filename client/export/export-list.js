import { ExportsCollection } from "../api/export";

Template.exportList.helpers({
  exports() {
    return ExportsCollection.find({userId: Meteor.userId()});
  },
});

Template.exportList.events({
  'click .btn-export'(event, instance) {
    Meteor.call('startExport', Meteor.userId(), (error, result) => {
      if (error) {
        console.error('Erreur lors du démarrage de l\'export :', error.reason);
      }
    });
  },
  'click .btn-clear'(event, instance) {
    Meteor.call('deleteExports', Meteor.userId(), (error, result) => {
      if (error) {
        console.error('Erreur lors de la suppression des exports :', error.reason);
      }
    });
  },
});