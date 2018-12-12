<template>
  <section>
    <div>
      <label for="fileInput">Select csv file:</label>
      <input
        @change="ingestCsv"
        accept=".csv"
        id="fileInput"
        name="fileInput"
        type="file"
      >
    </div>
    <div v-if="csvInputHeaders.length > 0">
      <p>Select fields to be concatenated in order:</p>
      <div
        :key="index"
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
    <div v-if="userSelectedHeaders.length > 0">
      <p>Your field selection is:</p>
      <ol>
        <li
          :key="index"
          v-for="(header, index) in userSelectedHeaders"
        >{{ header }}</li>
      </ol>
    </div>
    <button
      :disabled="userSelectedHeaders.length < 1"
      @click="setCsvOutput"
    >Submit</button>
    <button
      @click="resetApp"
      v-if="csvOutput.length > 0"
    >RESET DATA</button>
    <div v-if="csvOutput.length > 0 ">
      <hr>
      <p>Preview of output:</p>
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
      csvOutput: ""
    };
  },
  methods: {
    ingestCsv(e) {
      const vm = this;
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.readAsText(file);
      reader.onload = function(event) {
        vm.csvInput = event.target.result;
        CSV()
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
      this.saveFile(this.csvOutput);
    },
    saveFile(data) {
      dialog.showSaveDialog(
        {
          filters: [{ name: "csv", extensions: ["csv"] }]
        },
        fileName => {
          if (fileName === undefined) return;
          fs.writeFile(fileName, this.csvOutput);
        }
      );
    },
    resetApp() {
      this.csvInput = "";
      this.csvInputHeaders = [];
      this.userSelectedHeaders = [];
      this.csvAsJson = [];
      this.csvOutput = "";
    }
  }
};
</script>
