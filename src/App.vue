<template>
  <main class="container">
    <!-- <TheHeader></TheHeader> -->
    <TheProgressBar
      :onDownload="onDownload"
      :onFileInput="onFileInput"
      :onHeadersInput="onHeadersInput"
    ></TheProgressBar>

    <TheForm
      v-on:file-has-been-processed="stepOneComplete"
      v-on:headers-have-been-submitted="stepTwoComplete"
    ></TheForm>

    <TheFooter class="footer"></TheFooter>
  </main>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheForm from "./components/Form/TheForm.vue";
import TheFooter from "./components/TheFooter.vue";
import TheProgressBar from "./components/TheProgressBar.vue";

export default {
  components: {
    TheHeader,
    TheForm,
    TheFooter,
    TheProgressBar
  },
  data() {
    return {
      onFileInput: true,
      onHeadersInput: false,
      onDownload: false
    };
  },
  methods: {
    stepOneComplete() {
      this.onFileInput = false;
      this.onHeadersInput = true;
    },
    stepTwoComplete() {
      this.onHeadersInput = false;
      this.onDownload = true;
    }
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
}
.footer {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-end;
}
</style>
