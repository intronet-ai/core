import fs from 'fs';
import { difference } from 'lodash';
import path from 'path';

const DIR = path.join(__dirname, '../mailTemplates');

// The core library currently doesn't import firestore, but takes it as an injected dependency. It's
// simplest - though imprecise - to just use an any type here.
export async function seedMailTemplates(firestore: any) {
  fs.readdir(DIR, (err, files) => {
    if (err) return console.error(err);

    files.forEach(file => {
      const filePath = path.join(DIR, file);
      const templateName = file.split('.')[0];

      fs.readFile(filePath, 'utf-8', (err, html) => {
        if (filePath.includes('DS_Store')) return;
        if (err) {
          return console.log({ err });
        }

        const subjectMatch = html.match(/<title>(.*)<\/title>/);
        if (!subjectMatch)
          throw new Error(`No subject found for ${templateName}`);

        const subject = subjectMatch![1];

        // We look for handlebar variable declarations, but exclude {{#each thing}}, and {{/each}}
        const dataKeyRegexp = /{{([^\#\/]*?)}}/gm;
        const detectedKeys = [...html.matchAll(dataKeyRegexp)].map(
          thing => thing[1]
        );

        const excludedDataKeys =
          html.match(/<!-- excludedKeys: (.*) -->/)?.[1]?.split(',') || [];
        const requiredDataKeys = difference(detectedKeys, excludedDataKeys);

        firestore.collection('mailTemplates').doc(templateName).set({
          subject,
          html,
          requiredDataKeys,
        });
      });
    });
  });
}
