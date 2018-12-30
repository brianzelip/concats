<template>
  <section id="progress">
    <PlusSquareSvg
      :class="{iscomplete: haveFileInput }"
      class="icon"
    ></PlusSquareSvg>
    <TasksSvg
      :class="{iscomplete: haveHeadersInput }"
      class="icon"
    ></TasksSvg>
    <FileDownloadSvg
      :class="{iscomplete: haveDownloaded }"
      class="icon"
    ></FileDownloadSvg>
  </section>
</template>

<script>
import PlusSquareSvg from "../assets/plus-square.svg";
import TasksSvg from "../assets/tasks.svg";
import FileDownloadSvg from "../assets/file-download.svg";

export default {
  props: ["haveFileInput", "haveHeadersInput", "haveDownloaded"],
  components: {
    PlusSquareSvg,
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
