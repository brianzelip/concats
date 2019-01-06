<template>
  <section id="progress">
    <FilePlusSvg
      :class="{iscomplete: onFileInput }"
      class="stage"
    ></FilePlusSvg>
    <AngleRightSvg
      :class="{iscomplete: onHeadersInput }"
      class="arrow"
    ></AngleRightSvg>
    <TasksSvg
      :class="{iscomplete: onHeadersInput }"
      class="stage"
    ></TasksSvg>
    <AngleRightSvg
      :class="{iscomplete: onDownload }"
      class="arrow"
    ></AngleRightSvg>
    <FileDownloadSvg
      :class="{iscomplete: onDownload }"
      class="stage"
    ></FileDownloadSvg>
  </section>
</template>

<script>
import FilePlusSvg from "../assets/file-plus.svg";
import TasksSvg from "../assets/tasks.svg";
import FileDownloadSvg from "../assets/file-download.svg";
import AngleRightSvg from "../assets/angle-right.svg";

export default {
  props: ["onFileInput", "onHeadersInput", "onDownload"],
  components: {
    FilePlusSvg,
    TasksSvg,
    FileDownloadSvg,
    AngleRightSvg
  }
};
</script>

<style scoped>
#progress {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  color: black;
}
.stage,
.arrow {
  fill: black;
  opacity: 0.333;
}
.stage {
  width: 35px;
  height: 35px;
}
.arrow {
  width: 20px;
  height: 20px;
  margin: 0 1rem;
}
.stage.iscomplete,
.arrow.iscomplete {
  opacity: 1;
  transition: opacity 1.25s;
}
</style>
