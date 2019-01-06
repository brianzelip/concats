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
    <InfoCircleSvg class="info"></InfoCircleSvg>
  </section>
</template>

<script>
import FilePlusSvg from "../assets/file-plus.svg";
import TasksSvg from "../assets/tasks.svg";
import FileDownloadSvg from "../assets/file-download.svg";
import AngleRightSvg from "../assets/angle-right.svg";
import InfoCircleSvg from "../assets/info-circle.svg";

export default {
  props: ["onFileInput", "onHeadersInput", "onDownload"],
  components: {
    FilePlusSvg,
    TasksSvg,
    FileDownloadSvg,
    AngleRightSvg,
    InfoCircleSvg
  }
};
</script>

<style scoped>
#progress {
  position: relative;
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
.info {
  position: absolute;
  right: 0;
  width: 35px;
  height: 35px;
  fill: black;
  opacity: 0.333;
}
</style>
