<template>
  <section id="output">
    <p>Preview of output:</p>
    <pre>{{ csvOutput }}</pre>
  </section>
</template>

<script>
export default {
  props: ["csvOutput"]
};
</script>

<style scoped>
section {
  margin-bottom: 2rem;
}
p {
  font-weight: bold;
  margin: 0 0 1rem 0;
}
</style>

