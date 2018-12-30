<template>
  <section id="progress">
    <PlusSquareSvg class="icon"></PlusSquareSvg>
    <TasksSvg class="icon"></TasksSvg>
    <FileDownloadSvg class="icon"></FileDownloadSvg>
  </section>
</template>

<script>
import PlusSquareSvg from "../assets/plus-square.svg";
import TasksSvg from "../assets/tasks.svg";
import FileDownloadSvg from "../assets/file-download.svg";

export default {
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
}
</style>
