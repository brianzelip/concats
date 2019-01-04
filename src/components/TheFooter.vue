<template>
  <footer>
    <div>
      <hr>by
      <a
        @click.prevent="openExternal"
        href="http://zelip.me"
      >bzelip</a> |
      <a
        @click.prevent="openExternal"
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
      shell.openExternal(e.target.href);
    }
  }
};
</script>

<style>
footer {
  padding: 0 2rem 2rem 2rem;
  color: #aaa;
}
a {
  color: #111;
}
</style>
