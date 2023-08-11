module.exports = {
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
  testMatch: ["**/?(*.)+(spec|test).ts?(x)"],
  moduleFileExtensions: ["js", "ts", "tsx"],
  // We run functions test separately, as it's a separate project
  modulePathIgnorePatterns: ["functions"],
  setupFiles: [
    // "<rootDir>/test/jest.setup.js"
  ],
};
