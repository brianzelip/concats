<template>
  <footer>
    by
    <a href="http://zelip.me">bzelip</a> |
    <a href="https://github.com/brianzelip/concats">app source</a>
    <div>
      <p>{{ outputFile }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      outputFile: fs.constants
    };
  }
};
</script>
