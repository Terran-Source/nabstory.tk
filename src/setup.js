const replace = require('replace-in-file');
const { gaEnabled, gaTrackingId, gaContext, gaGitCommit } = require('./config');

const replacement = {
  files: 'themes/cactus/_config.yml',
  from: [
    "'{{GA_ENABLED}}'",
    "'{{GA_TRACKING_ID}}'",
    "'{{GA_CONTEXT}}'",
    "'{{GA_GIT_COMMIT}}'"
  ],
  to: [gaEnabled.toString(), gaTrackingId, gaContext, gaGitCommit]
};

console.log(replace.sync(replacement));
