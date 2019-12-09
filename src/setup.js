const replace = require('replace-in-file');

let gaEnabled = 'true' === (process.env.GA_ENABLED || false).toString(),
  gaTrackingId = (process.env.GA_TRACKING_ID || 'XXXX').toString();

const replacement = {
  files: 'themes/cactus/_config.yml',
  from: ["'{{GA_ENABLED}}'", "'{{GA_TRACKING_ID}}'"],
  to: [gaEnabled.toString(), gaTrackingId]
};

console.log(replace.sync(replacement));
