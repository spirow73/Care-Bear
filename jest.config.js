module.exports = {
<<<<<<< HEAD
    testEnvironment: 'jest-environment-jsdom',
=======
>>>>>>> 17ce6d835f506711f4ed1663ecf21f38804bd1d1
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
  