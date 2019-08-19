# concats

Cross platform desktop app for outputting a single-column csv file of rows of concatenated fields from an input delimiter-separated values file.

Accepts .csv, .tsv, and extension-less files (_data.csv_, _data.tsv_, _data_) as input.

![demo](demo.gif)

## Download

v1.13.3

- [macOS](https://github.com/brianzelip/concats/releases/download/v1.13.13/concats-1.13.13.dmg) (46.9 MB)
- [Windows](https://github.com/brianzelip/concats/releases/download/v1.13.13/concats.Setup.1.13.13.exe) (34.8 MB)

## Made with

- [electron](https://github.com/electron/electron)
- [vue](https://github.com/vuejs/vue)
- [vue-cli-plugin-electron-builder](https://github.com/nklayman/vue-cli-plugin-electron-builder)

## Development

To run concats locally (_requires [Node.js](https://nodejs.org) v8.9 or above_):

```bash

git clone git@github.com/brianzelip/concats.git

cd concats

npm install

npm run electron:serve

```

## Build binaries

To build the executable binary for `$PLATFORM`, you must have [Node.js](https://nodejs.org) v8.9 or above on `$PLATFORM`, and run:

```bash
git clone git@github.com/brianzelip/concats.git

cd concats

npm install

npm run electron:build
```
