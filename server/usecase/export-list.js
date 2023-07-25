import { ExportsCollection } from "../collections/export-list";

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
            ExportsCollection.update(exportId, { $inc: { progress: 5 } });
            updateProgress();
          }, 1000);
        } else {
          const resultUrls = [
            'https://www.lempire.com/',
            'https://www.lemlist.com/',
            'https://www.lemverse.com/',
            'https://www.lemstash.com/',
          ];
          const randomUrl = resultUrls[Math.floor(Math.random() * resultUrls.length)];
          ExportsCollection.update(exportId, { $set: { completed: true, resultUrl: randomUrl } });
        }
      };
  
      updateProgress();
    },
  });
  