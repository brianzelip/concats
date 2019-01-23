import fs from 'fs';

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
  if (filePaths != undefined) {
    vm.fileIsValid(filePaths[0])
      ? fs.readFile(filePaths[0], 'utf-8', function(err, fileAsString) {
          vm.$emit('file-input', fileAsString);
        })
      : console.log(vm.errorMsg(filePaths[0]));
  }
};

export { options, mainCB, rendererCB };
