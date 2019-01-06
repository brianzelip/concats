<template>
  <section id="fileSelector">
    <div
      @click="handleFileSelect($event)"
      @dragover.prevent
      @drop.prevent="handleFileDrop($event)"
      class="dropzone"
    >
      <label for="fileInput">Select file:</label>
      <input
        @change="$emit('file-input', $event)"
        accept=".csv, .tsv"
        id="fileInput"
        name="fileInput"
        text="Browse"
        type="file"
      >
      <p class="or">or</p>
      <p class="drag">Drag and drop file here</p>
    </div>
  </section>
</template>

<script>
const fs = require("fs");
const { dialog } = require("electron").remote;

export default {
  methods: {
    handleFileSelect(e) {
      const vm = this;
      dialog.showOpenDialog(
        {
          title: "Select a CSV or TSV file",
          filters: [{ name: "csv or tsv", extensions: ["csv", "tsv"] }],
          properties: ["openFile"]
        },
        filePaths => {
          if (filePaths[0] === undefined) return;
          fs.readFile(filePaths[0], "utf-8", function(err, fileAsString) {
            console.log(
              "fs says fileAsString is a:: typeof fileAsString",
              typeof fileAsString
            );
            vm.$emit("file-input", fileAsString);
          });
        }
      );
    },
    handleFileDrop(e) {
      const fileAsFileObj = e.dataTransfer.files[0];
      this.$emit("file-input", fileAsFileObj);
    }
  }
};
</script>

<style scoped>
section {
  display: flex;
  flex-grow: 1;
}
label {
  margin-right: 1rem;
  font-weight: bold;
}
.dropzone {
  flex-grow: 1;
  padding: 1rem;
  border-style: dashed;
}
.or {
  margin: 0.5rem 0;
  font-style: italic;
}
.drag {
  margin: 0;
  font-weight: bold;
}
</style>
