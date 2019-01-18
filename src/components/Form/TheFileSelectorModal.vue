<template>
  <aside>
    <div>
      <InfoCircleSVG class="icon"></InfoCircleSVG>
      <span>Please drag and drop a csv/tsv file!</span>
    </div>
  </aside>
</template>

<script>
import InfoCircleSVG from "../../assets/info-circle.svg";

export default {
  components: {
    InfoCircleSVG
  }
};
</script>


<style scoped>
aside {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.111);
}
div {
  display: flex;
  align-items: center;
  margin-top: 4rem;
  padding: 1.5rem 2rem;
  font-size: 1rem;
  border: 2px solid #ef5753;
  border-radius: 2px;
  background-color: #fcebea;
  color: #cc1f1a;
}
.icon {
  height: 25px;
  width: 25px;
  margin-right: 0.5rem;
  fill: #cc1f1a;
}
</style>
