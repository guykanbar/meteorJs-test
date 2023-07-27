import { ExportsCollection } from "../collections/export";

Meteor.methods({
    deleteExports(userId) {
        return ExportsCollection.remove({userId: userId});
    },
});