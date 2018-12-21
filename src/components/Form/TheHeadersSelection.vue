<template>
  <section style="margin-bottom: 2rem;">
    <p>Your field selection is:</p>
    <ol>
      <li
        :key="index"
        v-for="(header, index) in headers"
      >{{ header }}</li>
    </ol>
  </section>
</template>

<script>
export default {
  props: ["headers"]
};
</script>

<style scoped>
p {
  margin: 0 0 1rem 0;
  font-weight: bold;
}
</style>
