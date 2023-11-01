module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.svelte$': 'jest-transform-svelte',
      '^.+\\.js$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'svelte'],
    // Add this to handle ES6 imports
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    moduleNameMapper: {
      // Add any necessary mappings here
    },
    testEnvironment: 'jsdom', // This is important for Svelte components which may interact with the DOM
  };
  