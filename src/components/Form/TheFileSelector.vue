<template>
  <section id="fileSelector">
    <div
      @dragover.prevent
      @drop.prevent="$emit('file-input', $event)"
      class="dropzone"
    >
      <label for="fileInput">Select file:</label>
      <input
        @change="$emit('file-input', $event)"
        accept=".csv, .tsv"
        id="fileInput"
        name="fileInput"
        text="Browse"
        type="file"
      >
      <p class="or">or</p>
      <p class="drag">Drag and drop file here</p>
    </div>
  </section>
</template>

<style scoped>
label {
  margin-right: 1rem;
  font-weight: bold;
}
.dropzone {
  padding: 1rem;
  border-style: dashed;
}
.or {
  margin: 0.5rem 0;
  font-style: italic;
}
.drag {
  margin: 0;
  font-weight: bold;
}
</style>
