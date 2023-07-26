import { ExportsCollection } from "../collections/export-list";
import { LEMPIRE_URLS } from "../constants";

const UPDATE_PERIOD_MS = 1000;
const UPDATE_PROGRESS_UNIT = 5;

Meteor.methods({
  startExport() {
    const exportId = ExportsCollection.insert({
      progress: 0,
      completed: false,
    });

    const updateProgress = () => {
      const exportData = ExportsCollection.findOne(exportId);
      if (exportData.progress < 100) {
        Meteor.setTimeout(() => {
          ExportsCollection.update(exportId, { $inc: { progress: UPDATE_PROGRESS_UNIT } });
          updateProgress();
        }, UPDATE_PERIOD_MS);
      } else {
        const randomUrl = LEMPIRE_URLS[Math.floor(Math.random() * LEMPIRE_URLS.length)];
        ExportsCollection.update(exportId, { $set: { completed: true, resultUrl: randomUrl } });
      }
    };

    updateProgress();
  },
});
  