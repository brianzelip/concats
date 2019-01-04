<template>
  <main class="container">
    <!-- <TheHeader></TheHeader> -->
    <TheProgressBar
      :onDownload="onDownload"
      :onFileInput="onFileInput"
      :onHeadersInput="onHeadersInput"
    ></TheProgressBar>

    <TheForm
      v-on:file-has-been-processed="onHeadersInput = true"
      v-on:headers-have-been-submitted="onDownload = true"
      v-on:reset="reset"
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
    },
    reset() {
      this.onFileInput = true;
      this.onHeadersInput = false;
      this.onDownload = false;
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
