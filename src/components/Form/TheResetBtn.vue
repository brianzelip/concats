<template>
  <button @click.prevent="$emit('reset-app')">RESET DATA</button>
</template>

<style>
button {
  position: absolute;
  top: 0;
  right: 0;
}
</style>

