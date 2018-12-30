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
      <input
        @click.prevent="$emit('selected-headers-submitted')"
        class="btn btn-outline"
        type="submit"
        v-if="haveSelectedHeaders"
      >
    </transition>
  </section>
</template>

<script>
export default {
  props: ["headers"],
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
.btn {
  font-family: inherit;
  font-size: inherit;
  font-weight: 400;
  cursor: default;
  display: inline-block;
  line-height: 1.125rem;
  padding: 0.5rem 0.75rem;
  margin: 0;
  height: auto;
  border: 1px solid transparent;
  vertical-align: middle;
  -webkit-appearance: none;
  color: inherit;
  background-color: transparent;
}
.btn,
.btn:hover {
  text-decoration: none;
}
.btn:focus {
  outline: none;
  border-color: rgba(0, 0, 0, 0.125);
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.25);
}
::-moz-focus-inner {
  border: 0;
  padding: 0;
}
.btn-outline,
.btn-outline:hover {
  border-color: currentcolor;
}
.btn-outline {
  border-radius: 3px;
}
.btn-outline:hover {
  box-shadow: inset 0 0 0 20rem rgba(0, 0, 0, 0.0625);
}
.btn-outline:active {
  box-shadow: inset 0 0 0 20rem rgba(0, 0, 0, 0.125),
    inset 0 3px 4px 0 rgba(0, 0, 0, 0.25), 0 0 1px rgba(0, 0, 0, 0.125);
}
.btn-outline.is-disabled,
.btn-outline:disabled {
  opacity: 0.5;
}
.btn-outline.is-disabled:hover,
.btn-outline:disabled:hover {
  box-shadow: none;
}
</style>
