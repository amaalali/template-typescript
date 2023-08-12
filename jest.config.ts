import type { Config } from 'jest';

/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: ".out/coverage",
  coverageProvider: "v8",
  // coverageThreshold: undefined,
  errorOnDeprecated: false,
  testMatch: [
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  testPathIgnorePatterns: [
    "/node_modules/"
  ]
};

export default config;
