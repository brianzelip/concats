import fs from 'fs';

const util = {
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

const options = {
  title: 'Select a data file',
  properties: ['openFile']
};

const mainCB = (filePaths, BrowserWindow) => {
  if (filePaths != undefined) {
    fs.readFile(filePaths[0], 'utf-8', function(err, fileAsString) {
      if (err) {
        throw err;
      }
      BrowserWindow.webContents.send('file-input', fileAsString);
    });
  }
};

const rendererCB = filePaths => {
  console.log('vm from openDialog.js is:::', vm);
  if (filePaths != undefined) {
    util.fileIsValid(filePaths[0])
      ? fs.readFile(filePaths[0], 'utf-8', function(err, fileAsString) {
          vm.$emit('file-input', fileAsString);
        })
      : console.log(util.errorMsg(filePaths[0]));
  }
};

export { options, mainCB, rendererCB };
