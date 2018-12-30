<template>
  <section id="progress">
    <div>
      <PlusSquareSvg></PlusSquareSvg>
    </div>
    <div>
      <TasksSvg></TasksSvg>
    </div>
    <div>
      <FileDownloadSvg></FileDownloadSvg>
    </div>
    <!-- <div><img src="../assets/.svg" alt=""></div> -->
  </section>
</template>

<script>
import PlusSquareSvg from "./SVG/PlusSquare.vue";
import TasksSvg from "./SVG/Tasks.vue";
import FileDownloadSvg from "./SVG/FileDownload.vue";

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
div {
  height: 100px;
  width: 100px;
}
</style>

