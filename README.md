# Template TypeScript

A template repo for TypeScript projects

## Project description

### Tools

Uses the following tools:

- `tsc` and
- [Jest](https://jestjs.ioA) for testing that uses `Babel`
- [Prettier](https://prettier.io/) and [ESlint](https://eslint.org) for code formatting and linting

### Conventions

Assumes that all `npm` scripts with prefix `ci` (eg `ci:codeQuality`) will run checks or validations and all scripts with prefix `dev` (eg `dev:codeQuality` and `dev:test`) will run check, fix issues (where applicable), and/or generate reports.
