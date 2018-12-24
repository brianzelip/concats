# changelog

_started as of v1.4.0, on the concats feature branch_

## `components` branch, v1.4.0

Breaking up into components means whittling away at `TheInput.vue`.

This branch impacted the development experience, not the app user experience.

Basically, this feature branch work turned this directory structure:

```
src/components
├── global
│   └── TheHeader.vue
├── Input
│   └── TheInput.vue
├── Output
│   └── TheOutput.vue
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

## `app-steps-transitions` branch, v1.5.0

Design the app's user steps so that, instead of scrolling down the page as steps are completed, each completed step transitions away to make room for the next step. So in this scenario, there is no scrolling beyond the size of the app window.
