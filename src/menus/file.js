import fs from 'fs';

import { dialog } from 'electron';

export default function(BrowserWindow) {
  return {
    label: 'File',
    submenu: [
      {
        label: 'Open',
        accelerator: 'CmdOrCtrl+O',
        click() {
          dialog.showOpenDialog(
            {
              title: 'Select a CSV or TSV file',
              filters: [{ name: 'csv or tsv', extensions: ['csv', 'tsv'] }],
              properties: ['openFile']
            },
            filePaths => {
              if (filePaths != undefined) {
                fs.readFile(filePaths[0], 'utf-8', function(err, fileAsString) {
                  if (err) {
                    console.log(err);
                  }
                  BrowserWindow.webContents.send('file-input', fileAsString);
                });
              }
            }
          );
        }
      },
      {
        label: 'Reset',
        click() {
          BrowserWindow.webContents.send('reset-app');
        },
        accelerator: 'CmdOrCtrl+R'
      },
      { type: 'separator' },
      { role: 'quit', accelerator: 'CmdOrCtrl+Q' }
    ]
  };
}
