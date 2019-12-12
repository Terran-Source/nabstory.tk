const replace = require('replace-in-file');

let gaEnabled = 'true' === (process.env.GA_ENABLED || false).toString(),
  gaTrackingId = (process.env.GA_TRACKING_ID || 'XXXX').toString(),
  gaContext = (process.env.CONTEXT || 'XXXX').toString(),
  gaGitCommit = (process.env.COMMIT_REF || 'XXXX').toString();

const replacement = {
  files: 'themes/cactus/_config.yml',
  from: [
    "'{{GA_ENABLED}}'",
    "'{{GA_TRACKING_ID}}'",
    "'{GA_CONTEXT}'",
    "'{GA_GIT_COMMIT}'"
  ],
  to: [gaEnabled.toString(), gaTrackingId, gaContext, gaGitCommit]
};

console.log(replace.sync(replacement));
