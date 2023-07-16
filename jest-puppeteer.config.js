module.exports = {
  preset: 'jest-puppeteer',
  testMatch: ['<rootDir>/src/test/**/*.test.tsx'],
  launch: {
    headless: 'new', // 브라우저를 헤드리스 모드로 실행할지 여부
  },
};
