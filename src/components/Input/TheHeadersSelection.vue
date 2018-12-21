<template>
  <section style="margin-bottom: 2rem;">
    <p style="font-weight: bold;">Your field selection is:</p>
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

