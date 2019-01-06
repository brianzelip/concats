<template>
  <section id="fileSelector">
    <div
      :class="{isactive}"
      @click="handleFileSelect($event)"
      @dragenter="isactive = !isactive"
      @dragleave="isactive = !isactive"
      @dragover.prevent
      @drop.prevent="handleFileDrop($event)"
      class="dropzone"
    >
      <p>click to select file</p>
      <PlusCircleSvg
        :class="{ isactive }"
        class="add"
      ></PlusCircleSvg>
      <p>or drag and drop file here</p>
    </div>
  </section>
</template>

<script>
const fs = require("fs");
const { dialog } = require("electron").remote;

import PlusCircleSvg from "../../assets/plus-circle.svg";

export default {
  data() {
    return {
      isactive: false
    };
  },
  methods: {
    handleFileSelect() {
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
            vm.$emit("file-input", fileAsString);
          });
        }
      );
    },
    handleFileDrop(e) {
      const fileAsFileObj = e.dataTransfer.files[0];
      this.$emit("file-input", fileAsFileObj);
    }
  },
  components: {
    PlusCircleSvg
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-width: 4px;
  border-style: dashed;
  border-color: rgba(0, 0, 0, 0.333);
  transition: border-color 0.3s;
}
.add {
  fill: black;
  opacity: 0.333;
  width: 50px;
  height: 50px;
  transition: opacity 0.3s;
}
.add.isactive {
  opacity: 1;
  transition: opacity 0.3s;
}
.dropzone.isactive {
  border-color: rgba(0, 0, 0, 1);
  transition: border-color 0.3s;
}
</style>
