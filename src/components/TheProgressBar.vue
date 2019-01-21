<template>
  <section id="progress">
    <div
      :class="{iscurrent: onStep1}"
      class="one"
    >
      <FilePlusSvg
        :class="{iscurrent: onFileInput }"
        class="stage"
      ></FilePlusSvg>
    </div>
    <AngleRightSvg
      :class="{iscurrent: onStep1 }"
      class="arrow"
    ></AngleRightSvg>
    <div
      :class="{iscurrent: onStep2}"
      class="two"
    >
      <TasksSvg
        :class="{iscurrent: onHeadersInput }"
        class="stage"
      ></TasksSvg>
    </div>
    <AngleRightSvg
      :class="{iscurrent: onStep2 }"
      class="arrow"
    ></AngleRightSvg>
    <div
      :class="{iscurrent: onStep3}"
      class="three"
    >
      <FileDownloadSvg
        :class="{iscurrent: onDownload }"
        class="stage"
      ></FileDownloadSvg>
    </div>
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
  },
  computed: {
    onStep1() {
      return this.onFileInput;
    },
    onStep2() {
      return this.onHeadersInput;
    },
    onStep3() {
      return this.onDownload;
    }
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
div {
  width: 35px;
  position: relative;
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
div::after {
  position: absolute;
  bottom: -13px;
  left: 0;
  display: inline-block;
  width: 35px;
  font-size: 0.75rem;
  text-align: center;
  opacity: 0;
}
div.iscurrent::after {
  opacity: 1;
  transition: opacity 1.25s;
}
div.one::after {
  content: "1";
}
div.two::after {
  content: "2";
}
div.three::after {
  content: "3";
}
.arrow {
  width: 20px;
  height: 20px;
  margin: 0 1rem;
}
.stage.iscurrent,
.arrow.iscurrent {
  opacity: 1;
  transition: opacity 1.25s;
}
</style>
