const { teardown: teardownPuppeteer } = require('jest-environment-puppeteer');

module.exports = async function globalTeardown(globalConfig) {
  await global.__PAGE__.close();

  await teardownPuppeteer(globalConfig);
};
