<template>
  <div class="container">
    <TheInput></TheInput>
    <TheFooter class="footer"></TheFooter>
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

<style>
* {
  box-sizing: border-box;
}
.container {
  display: flex;
  height: 100vh;
  flex-direction: column;
  padding: 2rem;
}
.footer {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-end;
}
</style>
