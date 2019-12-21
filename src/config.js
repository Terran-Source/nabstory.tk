const dotenv = require('dotenv');

let envList = dotenv.config();

if (envList.error) throw envList.error;

// console.log(envList.parsed);

module.exports = {
  gaEnabled: 'true' === (process.env.GA_ENABLED || false).toString(),
  gaTrackingId: (process.env.GA_TRACKING_ID || 'XXXX').toString(),
  gaContext: (process.env.CONTEXT || 'XXXX').toString(),
  gaGitCommit: (process.env.COMMIT_REF || 'XXXX').toString()
};
