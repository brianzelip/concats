<template>
  <div>
    <div
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
          name="headers"
          type="checkbox"
          v-model="userSelectedHeaders"
        >
        <label :for="`headers-${index}`">{{ header }}</label>
      </div>
    </div>
    <div
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      userSelectedHeaders: []
    };
  },
  props: ["headers"]
};
</script>
