# changelog

_started as of v1.4.0, on the concats feature branch_

## `components` branch, starting at v1.4.0

Breaking up into components means whittling away at `TheInput.vue`.

This branch impacted the development experience, not the app user experience.

Basically, this feature branch work turned this directory structure:

```
src/components
├── global
│   └── TheHeader.vue
├── Input
│   └── TheInput.vue
└── Output
    └── TheOutput.vue
```

into this:

```
src/components
├── Form
│   ├── TheControls.vue
│   ├── TheFileSelector.vue
│   ├── TheForm.vue
│   ├── TheHeadersSelection.vue
│   ├── TheHeadersSelector.vue
│   └── TheOutput.vue
├── TheFooter.vue
└── TheHeader.vue
```

This feature branch created the minor bump to v1.5.0.

## `app-steps-transitions` branch, starting at v1.5.0

Design the app's user steps so that, instead of scrolling down the page as steps are completed, each completed step transitions away to make room for the next step. So in this scenario, there is no scrolling beyond the size of the app window.

## `redesign` branch, starting at v1.6.2

- replace header with thin icon progress bar showing the app workflow steps in total and which step the user is currently on
- add reset button to this progress bar area
- reconsider metadata from header and footer, make it all available via OS native menus, NOT via app UI
- expand the drop zone, and the click area for user to select input file
- make app ui more minimal centered around app workflow

## `app-metdata` feature branch, starting at v1.7.0

- removes footer
- adds completed metadata fields in package.json

## `menus` feature branch, starting at v1.7.4

- implements native OS menu system, including:
  - darwin menu if on darwin build
  - file
  - view
  - info - including an external link to app source repo and About concats pop up dialog on windows builds
- new app icon
- I read through the source code for Hyper by Zeit, and used their module approach to the menu organization

## `progress-bar-ui` feature branch, starting at v1.8.4

- adds step number underneath each step icon in progress bar via ::after psuedo element, opacity, and props on div wrapper around each svg

## `input-file-type` feature branch, starting at v1.9.1

- shows temporary modal when invalid file types are dropped onto TheFileSelector dropzone
- adds helpful text about valid file types to TheFileSelector
- here's [the !SO answer](https://stackoverflow.com/a/48481398/2145103) that helped me achieve the temporary modal solution by using the mounted() hook in the modal component to implement the `setTimeout()`

## `progress-svg-opacity` feature branch, starting at v1.10.0

- change the opacity transition of the angle arrows in the progress bar to point the user to the next step
- gets rid of all `.iscomplete` classes in favor of `.iscurrent`

## `maintenance` feature branch, starting at v1.11.0

- refactor src/\* into main/ and renderer/
- add README to build/

## `allow-plain-text` feature branch, starting at v1.12.0

- allow user to input an extension-less file or a csv/tsv file
- introduces a directory of shared modules between `src/main/` and `src/renderer/`

## `progress-bar-update` feature branch, starting at v1.13.1

- shows progress bar step numbers by default, and only the current step in bold
- makes LICENSE current
- cleans up readme

## `demo` feature branch, starting at v1.13.5

- create animated gif from screenshot video of using concats
- updates README with demo
- cleans up README to close some issues
