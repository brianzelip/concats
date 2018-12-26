<template>
  <section id="output">
    <p>Preview of output:</p>
    <pre>{{ output }}</pre>
  </section>
</template>

<script>
export default {
  props: ["output"]
};
</script>

<style scoped>
section {
  margin-bottom: 2rem;
}
p {
  font-weight: bold;
  margin: 0 0 1rem 0;
  padding-top: 1rem;
}
</style>

