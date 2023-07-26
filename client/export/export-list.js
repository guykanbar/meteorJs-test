import { ExportsCollection } from "../api/export";

Template.exportList.helpers({
  exports() {
    return ExportsCollection.find();
  },
});

Template.exportList.events({
  'click .btn-export'(event, instance) {
    Meteor.call('startExport', (error, result) => {
      if (error) {
        console.error('Erreur lors du démarrage de l\'export :', error.reason);
      }
    });
  },
});