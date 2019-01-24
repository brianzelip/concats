# concats

Desktop app for outputting a single-column csv file of rows of concatenated fields from an input csv file.

Made with:

- [electron](https://github.com/electron/electron)
- [vue](https://github.com/vuejs/vue)
- [vue-cli-plugin-electron-builder](https://github.com/nklayman/vue-cli-plugin-electron-builder)
- [electron-builder](https://www.electron.build/)

## User workflow:

1. Select file
2. Select headers
3. Output
4. Reset

## Components

- Input
  - FileSelector
  - HeadersSelector
  - Submit
  - Reset
- Output
  - Output

## Menu

what fundamental app behaviors should be available in the menus?

- load file
- reset app
- view dev tools
- get info about the app

The following are behavior of secondary importance:

- view full screen
- maximize
- minimize
- close
- all the apple-specific stuff like, hide, hide others, etc.
-

There could be:

- preferences, whereby the user sets default input and output directories
