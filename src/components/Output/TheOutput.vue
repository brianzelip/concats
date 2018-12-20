<template>
  <div id="output">
    <hr>
    <p style="font-weight: bold;">Preview of output:</p>
    <pre>{{ output }}</pre>
  </div>
</template>

<script>
export default {
  props: ["output"]
};
</script>
