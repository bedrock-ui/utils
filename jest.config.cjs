/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  collectCoverageFrom: ['src/**/*.ts', '!src/**/index.ts'],
  preset: 'ts-jest',
  testEnvironment: 'node',
};
