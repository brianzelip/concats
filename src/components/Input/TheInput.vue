<template>
  <section style="margin-bottom: 2rem;">
    <div style="margin-bottom: 2rem;">
      <div
        @dragover="dragover"
        @drop="drop"
        class="dropzone"
      >
        <label
          for="fileInput"
          style="margin-right: 1rem; font-weight: bold"
        >Select file:</label>
        <input
          @change="getInputFile"
          accept=".csv, .tsv"
          id="fileInput"
          name="fileInput"
          text="Browse"
          type="file"
        >
        <p style="margin: .5rem 0; font-style: italic">or</p>
        <p style="margin: 0; font-weight: bold">Drag and drop file here</p>
      </div>
    </div>
    <div
      style="margin-bottom: 2rem;"
      v-if="csvInputHeaders.length > 0"
    >
      <p style="margin-bottom: 1rem; font-weight: bold">Select fields to be concatenated in order:</p>
      <div
        :key="index"
        style="padding-bottom: .25rem;"
        v-for="(header, index) in csvInputHeaders"
      >
        <input
          :id="`headers-${index}`"
          :value="header"
          name="headers"
          type="checkbox"
          v-model="userSelectedHeaders"
        >
        <label :for="`headers-${index}`">{{ header }}</label>
      </div>
    </div>
    <div
      style="margin-bottom: 2rem;"
      v-if="userSelectedHeaders.length > 0"
    >
      <p style="font-weight: bold;">Your field selection is:</p>
      <ol>
        <li
          :key="index"
          v-for="(header, index) in userSelectedHeaders"
        >{{ header }}</li>
      </ol>
    </div>
    <div style="margin-bottom: 2rem;">
      <button
        :disabled="submitted"
        @click="setCsvOutput"
        v-if="userSelectedHeaders.length > 0"
      >Submit</button>
      <button
        @click="resetApp"
        v-if="csvOutput.length > 0"
      >RESET DATA</button>
    </div>
    <div v-if="csvOutput.length > 0 ">
      <hr>
      <p style="font-weight: bold;">Preview of output:</p>
      <pre>{{ csvOutput }}</pre>
    </div>
  </section>
</template>

<script>
const fs = require("fs");
const { dialog } = require("electron").remote;
import CSV from "csvtojson";

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
  methods: {
    ingestData(e) {
      const vm = this;
      const file = e.target.files[0];
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

<style>
.dropzone {
  padding: 1rem;
  border-style: dashed;
  /* text-align: center; */
}
</style>
