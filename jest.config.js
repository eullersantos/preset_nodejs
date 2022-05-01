module.exports = {
  roots: ['./src'],
  collectCoverageFrom: ['<rootDir>/src/tests/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
};
