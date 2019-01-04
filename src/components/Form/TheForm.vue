<template>
  <form name="concatsForm">
    <TheResetBtn
      v-if="fileHasBeenProcessed"
      v-on:reset-app="resetApp"
    ></TheResetBtn>

    <transition
      mode="out-in"
      name="fade"
    >
      <component
        :is="currentSelector"
        v-bind="currentSelectorProps"
        v-on:file-input="getInputFile"
        v-on:user-selected-headers-change="updateUserSelectedHeaders"
        v-on:user-selected-headers-submitted="setCsvOutput"
      ></component>
    </transition>
  </form>
</template>

<script>
const fs = require("fs");
const { dialog } = require("electron").remote;
import CSV from "csvtojson";

import TheFileSelector from "./TheFileSelector.vue";
import TheHeadersSelector from "./TheHeadersSelector.vue";
import TheOutput from "./TheOutput.vue";
import TheResetBtn from "./TheResetBtn.vue";

export default {
  data() {
    return {
      csvInput: "",
      csvInputHeaders: [],
      userSelectedHeaders: [],
      csvAsJson: [],
      csvOutput: "",
      submitted: false,
      currentSelector: "TheFileSelector"
    };
  },
  computed: {
    fileHasBeenProcessed() {
      if (this.csvAsJson.length > 0) {
        this.$emit("file-has-been-processed");
        return true;
      }
      return false;
    },
    headersHaveBeenSubmitted() {
      return this.csvInputHeaders.length > 0 && this.csvOutput.length > 0;
    },
    currentSelectorProps() {
      return this.currentSelector === "TheFileSelector"
        ? {}
        : this.currentSelector === "TheHeadersSelector"
        ? { headers: this.csvInputHeaders }
        : { csvOutput: this.csvOutput };
    }
  },
  components: {
    TheFileSelector,
    TheHeadersSelector,
    TheOutput,
    TheResetBtn
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
          })
          .then(() => {
            vm.currentSelector = "TheHeadersSelector";
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
      this.currentSelector = "TheOutput";
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
      this.currentSelector = "TheFileSelector";
      this.$emit("reset");
    }
  }
};
</script>

<style scoped>
form {
  margin-bottom: 2rem;
  padding: 2rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
