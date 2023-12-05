# Phaser Editor 2D Templates Scripts (library)

This is a template for making your own Phaser Editor 2D scripts library.

You may want to change the package name:

```
npm init
```

Then select the options.

## Instal dependencies

All Phaser Editor 2D script libraries depends on Phaser, `@phasereditor2d/scripts-core`, and TypeScript. You have to install dependencies:

```
npm install
```

## Build

To build this project, run:

```
npm run build
```

To publish this project to NPM:

```
npm run publish
```

It also contains NPM scripts for publishing to a local registry ([Verdaccio](https://verdaccio.org)) and make an alpha version channel.

## Index

You can add script nodes and user components to this library. To publish them you have to export them in the `src/index.ts` file.