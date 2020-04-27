const path = require('path');

module.exports = {
  preset: '@expo/jest-preset-cli',
  displayName: require('../package').name,
  rootDir: path.resolve(__dirname, '..'),
  roots: ['__mocks__', 'src'],
  setupFiles: ['<rootDir>/jest/fs-mock-setup.js'],
};
