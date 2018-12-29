<template>
  <section id="headersSelector">
    <p>Select fields to be concatenated in order:</p>

    <div class="mb2">
      <div
        :key="index"
        v-for="(header, index) in headers"
      >
        <span
          class="index"
          v-html="getSelectedIndex(header)"
        ></span>
        <input
          :id="`headers-${index}`"
          :value="header"
          name="userSelectedHeaders"
          type="checkbox"
          v-model="userSelectedHeaders"
        >
        <label :for="`headers-${index}`">{{ header }}</label>
      </div>
    </div>

    <transition name="fade">
      <TheControls
        :csvOutput="csvOutput"
        :submitted="submitted"
        v-if="haveSelectedHeaders"
      ></TheControls>
    </transition>
  </section>
</template>

<script>
import TheControls from "./TheControls.vue";

export default {
  props: ["headers", "submitted", "csvOutput"],
  data() {
    return {
      userSelectedHeaders: []
    };
  },
  computed: {
    haveSelectedHeaders() {
      return this.userSelectedHeaders.length > 0;
    }
  },
  methods: {
    getSelectedIndex(header) {
      return this.userSelectedHeaders.indexOf(header) > -1
        ? this.userSelectedHeaders.indexOf(header) + 1
        : "&nbsp;";
    }
  },
  watch: {
    userSelectedHeaders() {
      this.$emit("user-selected-headers-change", this.userSelectedHeaders);
    }
  },
  components: {
    TheControls
  }
};
</script>

<style scoped>
section {
  margin-bottom: 2rem;
}
p {
  margin: 0 0 1rem 0;
  font-weight: bold;
}
div {
  padding-bottom: 0.25rem;
}
.index {
  display: inline-block;
  width: 15px;
  font-size: 0.875rem;
  text-align: center;
}
.mb2 {
  margin-bottom: 1rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
