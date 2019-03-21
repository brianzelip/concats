const fCheck = {
  fileIsValid(file) {
    // analyze file extension approach via https://stackoverflow.com/a/22864057/2145103
    function hasExtension(file) {
      return (
        file
          .split('/')
          .pop()
          .split('.').length > 1
      );
    }
    function getExtension(file) {
      return file
        .split('/')
        .pop()
        .split('.')
        .pop();
    }
    function isExtensionWeLike(ext) {
      return ext === 'csv' || ext === 'tsv';
    }
    return (hasExtension(file) && isExtensionWeLike(getExtension(file))) ||
      !hasExtension(file)
      ? true
      : false;
  },
  errorMsg(fileName) {
    return `File selected had wrong extension (${fileName}); please select a csv/tsv file or a data file with no extension.`;
  }
};

const openDialogOptions = {
  title: 'Select a data file',
  properties: ['openFile'],
  filters: [{ name: "Data Files (*.CSV, *.TSV)", extensions: ["csv", "tsv"] }]
};

export { fCheck, openDialogOptions };
