<template>
  <main class="container">
    <TheProgressBar
      :onDownload="onDownload"
      :onFileInput="onFileInput"
      :onHeadersInput="onHeadersInput"
    ></TheProgressBar>

    <TheForm
      class="form"
      v-on:file-has-been-processed="stepOneComplete"
      v-on:reset="reset"
      v-on:user-selected-headers-submitted="stepTwoComplete"
    ></TheForm>
  </main>
</template>

<script>
import TheForm from "./components/Form/TheForm.vue";
import TheProgressBar from "./components/TheProgressBar.vue";

export default {
  components: {
    TheForm,
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
.form {
  flex-grow: 1;
}
.footer {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
