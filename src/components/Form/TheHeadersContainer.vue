<template>
  <div class="flex-container">
    <TheHeadersSelector
      :headers="headers"
      class="flex-item"
      v-on:user-selected-headers-change="updateUserSelectedHeaders"
    ></TheHeadersSelector>

    <TheHeadersSelection
      :headers="userSelectedHeaders"
      class="flex-item"
    ></TheHeadersSelection>
  </div>
</template>

<script>
import TheHeadersSelector from "./TheHeadersSelector.vue";
import TheHeadersSelection from "./TheHeadersSelection.vue";

export default {
  data() {
    return {
      userSelectedHeaders: []
    };
  },
  components: {
    TheHeadersSelector,
    TheHeadersSelection
  },
  props: ["headers"],
  methods: {
    updateUserSelectedHeaders(data) {
      this.userSelectedHeaders = data;
      this.$emit("user-selected-headers-change", data);
    }
  }
};
</script>


<style>
.flex-container {
  display: flex;
  flex-flow: wrap;
}
.flex-item {
  flex: 0 0 50%;
}
</style>
