<template>
  <section
    id="headerSelector"
    style="margin-bottom: 2rem;"
  >
    <p style="margin-bottom: 1rem; font-weight: bold">Select fields to be concatenated in order:</p>
    <div
      :key="index"
      style="padding-bottom: .25rem;"
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
