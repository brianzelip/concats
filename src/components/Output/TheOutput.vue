<template>
  <div
    id="output"
    style="margin-bottom: 2rem;"
    v-if="userSelectedHeaders.length > 0"
  >
    <p style="font-weight: bold;">Your field selection is:</p>
    <ol>
      <li
        :key="index"
        v-for="(header, index) in userSelectedHeaders"
      >{{ header }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  props: ["userSelectedHeaders"]
};
</script>
