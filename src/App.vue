<template>
  <main class="container">
    <h1>concats</h1>
    <p>output a single-column csv file of rows of concatenated fields from an input tsv/csv file</p>

    <TheInput></TheInput>

    <TheOutput></TheOutput>

    <TheFooter class="footer"></TheFooter>
  </main>
</template>

<script>
import TheInput from "./components/Input/TheInput.vue";
import TheOutput from "./components/Output/TheOutput.vue";
import TheFooter from "./components/global/TheFooter.vue";

export default {
  components: {
    TheInput,
    TheOutput,
    TheFooter
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
.container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  padding: 2rem;
}
.footer {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-end;
}
h1,
p {
  margin: 0;
}
p {
  margin-bottom: 2rem;
}
</style>
