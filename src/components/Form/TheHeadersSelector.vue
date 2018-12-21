<template>
  <section id="headersSelector">
    <p>Select fields to be concatenated in order:</p>
    <div
      :key="index"
      v-for="(header, index) in headers"
    >
      <input
        :id="`headers-${index}`"
        :value="header"
        name="userSelectedHeaders"
        type="checkbox"
        v-model="userSelectedHeaders"
      >
      <label :for="`headers-${index}`">{{ header }}</label>
    </div>
  </section>
</template>

<script>
export default {
  props: ["headers"],
  data() {
    return {
      userSelectedHeaders: []
    };
  },
  watch: {
    userSelectedHeaders() {
      this.$emit("user-selected-headers-change", this.userSelectedHeaders);
    }
  }
};
</script>

<style scoped>
section {
  margin-bottom: 2rem;
}
p {
  margin: 0 0 1rem 0;
  font-weight: bold;
}
div {
  padding-bottom: 0.25rem;
}
</style>
