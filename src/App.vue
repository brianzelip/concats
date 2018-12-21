<template>
  <main class="container">
    <TheHeader></TheHeader>

    <TheForm></TheForm>

    <TheFooter class="footer"></TheFooter>
  </main>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheForm from "./components/Form/TheForm.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheForm,
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
</style>
