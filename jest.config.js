module.exports = {
  preset: 'jest-puppeteer',
  testEnvironment: 'jest-environment-puppeteer',
  setupFilesAfterEnv: ['expect-puppeteer'],
  testMatch: ['<rootDir>/src/test/**/*.test.tsx'],
  globalSetup: './globalSetup.js',
  globalTeardown: './globalTeardown.js',
};
