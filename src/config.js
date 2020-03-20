const { loadConfig } = require('@terran-source/dotconfig');

let envList = loadConfig('config.json');

if (envList.error) throw envList.error;

// console.log(envList.parsed);

module.exports = envList.parsed;
