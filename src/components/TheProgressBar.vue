<template>
  <section id="progress">
    <FilePlusSvg
      :class="{iscomplete: onFileInput }"
      class="icon"
    ></FilePlusSvg>
    <LongArrowRightSvg
      :class="{iscomplete: onHeadersInput }"
      class="arrow"
    ></LongArrowRightSvg>
    <TasksSvg
      :class="{iscomplete: onHeadersInput }"
      class="icon"
    ></TasksSvg>
    <LongArrowRightSvg
      :class="{iscomplete: onDownload }"
      class="arrow"
    ></LongArrowRightSvg>
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
import LongArrowRightSvg from "../assets/long-arrow-right.svg";

export default {
  props: ["onFileInput", "onHeadersInput", "onDownload"],
  components: {
    FilePlusSvg,
    TasksSvg,
    FileDownloadSvg,
    LongArrowRightSvg
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
#progress {
  color: black;
  padding: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon {
  width: 40px;
  height: 40px;
  fill: black;
  opacity: 0.5;
}
.arrow {
  width: 25px;
  height: 25px;
  fill: black;
  opacity: 0.5;
  margin: 0 1.5rem;
}
.icon.iscomplete,
.arrow.iscomplete {
  opacity: 1;
}
</style>
