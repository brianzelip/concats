<template>
  <div style="margin-bottom: 2rem;">
    <div
      @dragover.prevent
      @drop.prevent="$emit('file-input', $event)"
      class="dropzone"
    >
      <label
        for="fileInput"
        style="margin-right: 1rem; font-weight: bold"
      >Select file:</label>
      <input
        @change="$emit('file-input', $event)"
        accept=".csv, .tsv"
        id="fileInput"
        name="fileInput"
        text="Browse"
        type="file"
      >
      <p style="margin: .5rem 0; font-style: italic">or</p>
      <p style="margin: 0; font-weight: bold">Drag and drop file here</p>
    </div>
  </div>
</template>

<style>
.dropzone {
  padding: 1rem;
  border-style: dashed;
}
</style>
