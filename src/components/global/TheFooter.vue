<template>
  <footer>
    <div>
      <hr>by
      <a href="http://zelip.me">bzelip</a> |
      <a href="https://github.com/brianzelip/concats">app source</a> | v{{ version }}
    </div>
  </footer>
</template>

<script>
import { version } from '../../../package.json'

export default {
  data() {
    return {
      version
    }
  }
}
</script>
