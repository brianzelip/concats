<template>
  <footer>
    <div>
      <hr>by
      <a href="http://zelip.me" @click="openExternal">bzelip</a> |
      <a href="https://github.com/brianzelip/concats" @click="openExternal">app source</a> | v{{ version }}
    </div>
  </footer>
</template>

<script>
import { version } from '../../../package.json';
import { shell } from 'electron';

export default {
  data() {
    return {
      version
    }
  },
  methods: {
    openExternal(e) {
      e.preventDefault();
      shell.openExternal(e.target.href)
    }
  }
}
</script>
