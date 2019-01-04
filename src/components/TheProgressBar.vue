<template>
  <section id="progress">
    <FilePlusSvg
      :class="{iscomplete: onFileInput }"
      class="icon"
    ></FilePlusSvg>
    <TasksSvg
      :class="{iscomplete: onHeadersInput }"
      class="icon"
    ></TasksSvg>
    <FileDownloadSvg
      :class="{iscomplete: onDownload }"
      class="icon"
    ></FileDownloadSvg>
  </section>
</template>

<script>
import FilePlusSvg from "../assets/file-plus.svg";
import TasksSvg from "../assets/tasks.svg";
import FileDownloadSvg from "../assets/file-download.svg";

export default {
  props: ["onFileInput", "onHeadersInput", "onDownload"],
  components: {
    FilePlusSvg,
    TasksSvg,
    FileDownloadSvg
  }
};
</script>

<style scoped>
#progress {
  background: black;
  color: white;
  padding: 2rem;
  display: flex;
  justify-content: center;
}
.icon {
  width: 50px;
  height: 50px;
  fill: white;
  opacity: 0.5;
  margin-right: 2rem;
}
.icon.iscomplete {
  opacity: 1;
}
</style>
