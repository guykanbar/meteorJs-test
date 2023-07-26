import { ExportsCollection } from "../collections/export";

Meteor.methods({
    deleteExports() {
        return ExportsCollection.remove({});
    },
});