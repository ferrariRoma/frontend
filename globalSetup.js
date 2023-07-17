const { setup: setupPuppeteer } = require('jest-environment-puppeteer');

module.exports = async function globalSetup(globalConfig) {
  await setupPuppeteer(globalConfig);

  global.__PAGE__ = await browser.newPage();
};
