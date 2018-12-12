<template>
  <section>
    <label for="fileInput">Select csv file:</label>
    <input
      @change="ingestCsv"
      accept=".csv"
      id="fileInput"
      name="fileInput"
      type="file"
    >
    <div v-if="csvInputHeaders.length > 0">
      <p>Select the headers to concat in order:</p>
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
      <p>user selected headers are:</p>
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
    <pre>{{ csvOutput }}</pre>
  </section>
</template>

<script>
import fs from "fs";
import CSV from "csvtojson";
const { dialog } = require("electron").remote;

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
      this.writeFile(this.csvOutput);
    },
    writeFile(data) {
      fs.writeFile("HOLYSHIT.txt", data);
      console.log("FILE DATA JUST WRITTEN!");
      console.log(dialog);
    }
  }
};
</script>
