const replace = require('replace-in-file');
const { loadConfig } = require('dots-config');
const appConfig = loadConfig('config.json');

const replacement = {
  files: 'themes/cactus/_config.yml',
  from: [
    "'{{GA_ENABLED}}'",
    "'{{GA_TRACKING_ID}}'",
    "'{{GA_CONTEXT}}'",
    "'{{GA_GIT_COMMIT}}'",
  ],
  to: [
    appConfig.gaEnabled.toString(),
    appConfig.gaTrackingId,
    appConfig.gaContext,
    appConfig.gaGitCommit,
  ],
};

console.log(replace.sync(replacement));
