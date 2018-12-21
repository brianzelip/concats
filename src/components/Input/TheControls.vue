<template>
  <div
    id="controls"
    style="margin-bottom: 2rem;"
  >
    <button
      :disabled="submitted"
      @click="$emit('input-submitted')"
    >Submit</button>
    <button
      @click="$emit('reset-app')"
      v-if="csvOutput.length > 0"
    >RESET DATA</button>
  </div>
</template>

<script>
export default {
  props: ["submitted", "csvOutput"]
};
</script>

