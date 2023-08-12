# Template TypeScript

## Description

A template repo for TypeScript projects with a few opinions on scripts structure and tooling.

## Project toolingtools:

- The Typescript compiler `tsc`
- [Jest](https://jestjs.ioA) for testing that uses `ts-jest`
- [Prettier](https://prettier.io/)
- [ESlint](https://eslint.org) for code formatting and linting

## Project Conventions

### Script organisation
Scripts prefixed with `ci:` (eg `ci:codeQuality`) will run checks or validations
Scripts with prefix `dev:` (eg `dev:codeQuality` and `dev:test`) will run check, fix issues (where applicable), and/or generate reports.

### Tooling output
TLDR: look in `.out/`

Outputs from tooling including the TypeScript compiler (`tsc`) and from test such as coverage reports are all in the `.out/` directory.
