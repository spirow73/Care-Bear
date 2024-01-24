// jest.config.js
export default {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.svelte$': 'jest-transform-svelte',
    '^.+\\.js$': 'babel-jest'
  },
  moduleFileExtensions: ['js', 'svelte'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    // Add any necessary mappings here
  },
  testEnvironment: 'jsdom', // This is important for Svelte components which may interact with the DOM
  
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,svelte}"],
  coverageReporters: ["json", "lcov", "text", "clover"],
  coverageDirectory: "coverage"
};
