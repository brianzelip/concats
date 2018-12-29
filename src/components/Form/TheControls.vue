<template>
  <section id="controls">
    <input
      @click.prevent="$emit('input-submitted')"
      class="btn btn-outline"
      type="submit"
      v-if="!submitted"
    >
    <button
      @click.prevent="$emit('reset-app')"
      v-if="csvOutput.length > 0"
    >RESET DATA</button>
  </section>
</template>

<script>
export default {
  props: ["submitted", "csvOutput"]
};
</script>

<style scoped>
section {
  margin-bottom: 2rem;
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
.btn-primary {
  color: #fff;
  background-color: #0074d9;
  border-radius: 3px;
}
.btn-primary:hover {
  box-shadow: inset 0 0 0 20rem rgba(0, 0, 0, 0.0625);
}
.btn-primary:active {
  box-shadow: inset 0 0 0 20rem rgba(0, 0, 0, 0.125),
    inset 0 3px 4px 0 rgba(0, 0, 0, 0.25), 0 0 1px rgba(0, 0, 0, 0.125);
}
.btn-primary.is-disabled,
.btn-primary:disabled {
  opacity: 0.5;
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
