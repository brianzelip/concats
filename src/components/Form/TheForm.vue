<template>
  <form name="concatsForm">
    <TheFileSelector
      v-if="!fileHasBeenProcessed"
      v-on:file-input="getInputFile"
    ></TheFileSelector>

    <TheHeadersSelector
      :headers="csvInputHeaders"
      v-if="fileHasBeenProcessed && !headersHaveBeenSubmitted"
      v-on:user-selected-headers-change="updateUserSelectedHeaders"
    ></TheHeadersSelector>

    <TheControls
      :csvOutput="csvOutput"
      :submitted="submitted"
      v-if="fileHasBeenProcessed"
      v-on:input-submitted="setCsvOutput"
      v-on:reset-app="resetApp"
    ></TheControls>

    <TheOutput
      :output="csvOutput"
      v-if="csvOutput.length > 0"
    ></TheOutput>
  </form>
</template>

<script>
const fs = require("fs");
const { dialog } = require("electron").remote;
import CSV from "csvtojson";

import TheFileSelector from "./TheFileSelector.vue";
import TheHeadersSelector from "./TheHeadersSelector.vue";
import TheControls from "./TheControls.vue";
import TheOutput from "./TheOutput.vue";

export default {
  data() {
    return {
      csvInput: "",
      csvInputHeaders: [],
      userSelectedHeaders: [],
      csvAsJson: [],
      csvOutput: "",
      submitted: false
    };
  },
  computed: {
    fileHasBeenProcessed() {
      return this.csvAsJson.length > 0;
    },
    headersHaveBeenSubmitted() {
      return this.csvInputHeaders.length > 0 && this.csvOutput.length > 0;
    }
  },
  components: {
    TheFileSelector,
    TheHeadersSelector,
    TheControls,
    TheOutput
  },
  methods: {
    getInputFile(e) {
      const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
      this.handleInputFile(file);
    },
    handleInputFile(file) {
      const vm = this;
      const reader = new FileReader();

      reader.readAsText(file);
      reader.onload = function(event) {
        vm.csvInput = event.target.result;
        CSV({ delimiter: ["\t", ","] })
          .fromString(vm.csvInput)
          .on("header", header => {
            vm.setCsvInputHeaders(header);
          })
          .then(json => {
            vm.setCsvAsJson(json);
          });
      };
    },
    setCsvInputHeaders(data) {
      this.csvInputHeaders = data;
    },
    setCsvAsJson(data) {
      this.csvAsJson = data;
    },
    updateUserSelectedHeaders(data) {
      this.userSelectedHeaders = data;
    },
    setCsvOutput() {
      this.csvOutput = this.csvAsJson
        .reduce((acc, obj) => {
          const keys = this.userSelectedHeaders;
          var concattedString = "";
          keys.forEach((key, index) => {
            index !== keys.length - 1
              ? (concattedString = concattedString.concat(`${obj[key]} `))
              : (concattedString = concattedString.concat(obj[key]));
          });
          acc.push(concattedString);
          return acc;
        }, [])
        .join("\n");
      this.submitted = !this.submitted;
      this.saveFile(this.csvOutput);
    },
    saveFile(data) {
      dialog.showSaveDialog(
        {
          filters: [{ name: "csv", extensions: ["csv"] }]
        },
        fileName => {
          if (fileName === undefined) return;
          fs.writeFile(fileName, data);
        }
      );
    },
    resetApp() {
      this.csvInput = "";
      this.csvInputHeaders = [];
      this.userSelectedHeaders = [];
      this.csvAsJson = [];
      this.csvOutput = "";
      this.submitted = false;
    }
  }
};
</script>

<style scoped>
form {
  margin-bottom: 2rem;
}
</style>
