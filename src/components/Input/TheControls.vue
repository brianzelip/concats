<template>
  <section id="controls">
    <input
      :disabled="submitted"
      @click.prevent="$emit('input-submitted')"
      type="submit"
    >
    <button
      @click="$emit('reset-app')"
      v-if="csvOutput.length > 0"
    >RESET DATA</button>
  </section>
</template>

<script>
export default {
  props: ["submitted", "csvOutput"]
};
</script>

<style scoped>
section {
  margin-bottom: 2rem;
}
</style>
