# `npm-pkg`

Create your npm package with ESNext, Flowtype and prettier.

## Installation

```sh
git clone https://github.com/withspectrum/npk-pkg.git
yarn install
```

The you can start writing your package using the latest ESNext features and flowtype in the `src` folder. When you `git commit` prettier will format your code.

## Commands

```sh
yarn run test     # Test your package with Jest
yarn run flow     # Check your types with Flow
yarn run build    # Transpile the code with Babel
yarn run prettier # Format the codebase with prettier
```

## Publishing

We recommend using `np` for publishing:

```sh
# Install the np module
npm i -g np
# Publish a new version of your package!
np patch
```

## License

Licensed under the MIT License, Copyright ©️ 2017 Maximilian Stoiber. See [LICENSE.md](LICENSE.md) for more information.
