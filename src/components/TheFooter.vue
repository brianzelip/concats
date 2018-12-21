<template>
  <footer>
    <div>
      <hr>by
      <a
        @click="openExternal"
        href="http://zelip.me"
      >bzelip</a> |
      <a
        @click="openExternal"
        href="https://github.com/brianzelip/concats"
      >app source</a>
      | v{{ version }}
    </div>
  </footer>
</template>

<script>
import { version } from "../../package.json";
import { shell } from "electron";

export default {
  data() {
    return {
      version
    };
  },
  methods: {
    openExternal(e) {
      e.preventDefault();
      shell.openExternal(e.target.href);
    }
  }
};
</script>
