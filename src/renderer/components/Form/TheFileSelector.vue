<template>
  <section id="fileSelector">
    <div
      :class="{isactive}"
      @click="handleFileSelect($event)"
      @dragenter="isactive = true"
      @dragleave="isactive = false"
      @dragover.prevent
      @drop.prevent="handleFileDrop($event)"
      @mouseenter="isactive = true"
      @mouseleave="isactive = false"
      class="dropzone"
    >
      <p>click to select a csv/tsv file</p>
      <PlusSvg
        :class="{ isactive }"
        class="add"
      ></PlusSvg>
      <p>or drag and drop a file</p>
    </div>
    <transition name="fade">
      <TheFileSelectorModal
        v-if="showModal"
        v-on:hide-modal="showModal = false"
      ></TheFileSelectorModal>
    </transition>
  </section>
</template>

<script>
const fs = require("fs");
const { dialog } = require("electron").remote;

import { options, rendererCB } from "../../../shared/fileHelper.js";

import PlusSvg from "../../assets/plus.svg";
import TheFileSelectorModal from "./TheFileSelectorModal.vue";

export default {
  data() {
    return {
      isactive: false,
      showModal: false
    };
  },
  methods: {
    handleFileSelect() {
      const vm = this;

      dialog.showOpenDialog(options, filePaths => {
        if (filePaths != undefined) {
          vm.fileIsValid(filePaths[0])
            ? fs.readFile(filePaths[0], "utf-8", function(err, fileAsString) {
                vm.$emit("file-input", fileAsString);
              })
            : console.log(vm.errorMsg(filePaths[0]));
        }
      });
    },
    handleFileDrop(e) {
      const fileName = e.dataTransfer.files[0].name;

      this.fileIsValid(fileName)
        ? this.$emit("file-input", e.dataTransfer.files[0])
        : console.log(this.errorMsg(fileName));
    },
    fileIsValid(file) {
      // analyze file extension approach via https://stackoverflow.com/a/22864057/2145103

      function hasExtension(file) {
        return (
          file
            .split("/")
            .pop()
            .split(".").length > 1
        );
      }
      function getExtension(file) {
        return file
          .split("/")
          .pop()
          .split(".")
          .pop();
      }
      function isExtensionWeLike(ext) {
        return ext === "csv" || ext === "tsv";
      }
      return (hasExtension(file) && isExtensionWeLike(getExtension(file))) ||
        !hasExtension(file)
        ? true
        : false;
    },
    errorMsg(fileName) {
      return `File selected had wrong extension (${fileName}); please select a csv/tsv file or a data file with no extension.`;
    }
  },
  components: {
    PlusSvg,
    TheFileSelectorModal
  }
};
</script>

<style scoped>
section {
  display: flex;
  flex-grow: 1;
  position: relative;
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
  border-radius: 4px;
  transition: border-color 0.3s;
}
.add {
  fill: black;
  opacity: 0.333;
  width: 35px;
  height: 35px;
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
