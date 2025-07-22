// jest.config.js
module.exports = {
    preset: 'jest-expo',
    transformIgnorePatterns: [
      'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|expo-modules-core)',
    ],
    // If you are using TypeScript, you might also need ts-jest or ensure jest-expo handles it.
    // Often, `jest-expo` will pull in the necessary TypeScript setup.
    // If you still have TypeScript issues, you might need to explicitly add:
    // transform: {
    //   '^.+\\.tsx?$': 'ts-jest',
    // },
    // moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  };