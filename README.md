# react-webpack-es6-chunking
> ES6 react + webpack + react-router + code-chunking starter project.

This repository was created to demonstrate a simple application that lazy loads views/scripts using the latest [React](https://www.npmjs.com/package/react) and [React-Router](https://www.npmjs.com/package/react-router).  Bundling and chunking gets handled with [Webpack](https://www.npmjs.com/package/webpack) and is written in ES6.

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
$ npm run compile
```
**Open your browser and navigate to http://127.0.0.1:8080/**