# AI2 Blockly Playground
 This project aims to allow blockly file (.bky) of app project created with MIT App Inventor 2 to be imported to a modified Google Blockly Playground which enables :
 - Showing all the blocks of a Screen
 - Acting as a Playground (enable modifications without MIT App Inventor 2)
 - Generations of JavaScript code

## Warning : Project Work in progress
 The project is under heavy construction\
 Very little functions will actually works in this state.

## Project structure

This is a NextJS Project which uses the standard blockly package from npm.

 Folder:
 - lib/blocks: This is where to code the custom blocks (blocks that are not available in blockly/core).
 - lib/fields: For fields that enables the feature of React.
 - lib/generator: The Code to convert the blocks to JavaScript
 - pages: Next.JS's src, to store web pages and components.
 - public: to store files that is accessable from the web, eg assets, media, etc.
 - styles: CSS files.

 Files:
 - package.json: For npm
 - next.config.js: NextJS Config
 - sw.js: serviceWorker required for Blockly
 - *.bky, *.aia: Debug files
 
 ## Run from Local

**Before you begin, you will need to install [`nodejs`](https://nodejs.org/en/download/) and [`yarn`](https://yarnpkg.com/en/docs/install).**

To install the required node packages :

```
yarn install
```

To run a dev server :

```
yarn dev
```


To build for production :

```
yarn build
```

To run production server :

```
yarn start
```

