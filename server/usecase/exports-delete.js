import { ExportsCollection } from "../collections/export-list";

Meteor.methods({
    deleteExports() {
        return ExportsCollection.remove({});
    },
});