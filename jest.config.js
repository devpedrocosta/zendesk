module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  bail: true,
  testMatch: ["**/*.test.ts"],
  "roots": ["./src"]
};