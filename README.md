# react-router-code-chunking-example

![npm][npm-version-image]
[![Dependency Status][dep-image]][dep-url]
[![devDependency Status][dev-dep-image]][dev-dep-url]

> React + react-router code-chunking example

This repository was created to demonstrate a dead simple application that lazy loads views/scripts using the latest [React](https://www.npmjs.com/package/react) and [React-Router](https://www.npmjs.com/package/react-router).  Bundling and chunking gets handled with [Webpack](https://www.npmjs.com/package/webpack) and is written using ES6 modules.

## Requirements
The following tools are required to get this running.

### Dev tools
* [Node](https://nodejs.org/en/) `~6.2.2` *~NPM will install automatically*
* NPM `~3.9.5`
* [Webpack](https://webpack.github.io/) `~1.13.1`


## Installation
### Install Node
Visit [here](https://nodejs.org/en/) - download and install the latest, stable version.
This will install `npm` automatically.

### Install Webpack globally
```sh
sudo npm install -g webpack
```

### Install dependencies
`cd` into the root of the project and run this command
```sh
$ npm install
```

### Run project
```sh
$ npm run dev
```
**Open your browser and navigate to localhost:8080**

[npm-version-image]: https://img.shields.io/npm/v/npm.svg?maxAge=2592000
[dev-dep-image]: https://david-dm.org/JFusco/react-router-code-chunking-example/dev-status.svg
[dev-dep-url]: https://david-dm.org/JFusco/react-router-code-chunking-example#info=devDependencies
[dep-image]: https://img.shields.io/david/JFusco/react-router-code-chunking-example.svg
[dep-url]: https://david-dm.org/JFusco/react-router-code-chunking-example
