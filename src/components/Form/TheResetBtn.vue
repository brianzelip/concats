<template>
  <transition name="fade">
    <button
      @click.prevent="$emit('reset-app')"
      class="btn btn-primary"
    >Reset</button>
  </transition>
</template>

<style>
button {
  position: absolute;
  top: 0.75rem;
  left: 2rem;
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
  background-color: black;
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
.btn-primary.is-disabled:hover,
.btn-primary:disabled:hover {
  box-shadow: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

