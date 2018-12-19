<template>
  <div
    id="headerSelector"
    style="margin-bottom: 2rem;"
    v-if="csvInputHeaders.length > 0"
  >
    <p style="margin-bottom: 1rem; font-weight: bold">Select fields to be concatenated in order:</p>
    <div
      :key="index"
      style="padding-bottom: .25rem;"
      v-for="(header, index) in csvInputHeaders"
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
</template>

<script>
export default {};
</script>
