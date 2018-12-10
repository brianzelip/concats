<template>
  <div>
    <TheInput></TheInput>
    <hr>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheInput from "./components/Input/TheInput.vue";
import TheFooter from "./components/global/TheFooter.vue";

export default {
  components: {
    TheInput,
    TheFooter
  },
  computed: {}
};
</script>
