import fs from 'fs';

import { dialog } from 'electron';

export default function(BrowserWindow) {
  const fileMenu = {
    label: 'File',
    submenu: [
      {
        label: 'Open',
        accelerator: 'CmdOrCtrl+O',
        click() {
          dialog.showOpenDialog(
            {
              title: 'Select a data file',
              properties: ['openFile']
            },
            filePaths => {
              if (filePaths != undefined) {
                fs.readFile(filePaths[0], 'utf-8', function(err, fileAsString) {
                  if (err) {
                    throw err;
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
      }
    ]
  };

  if (process.platform !== 'darwin') {
    fileMenu.submenu.push(
      { type: 'separator' },
      { role: 'quit', accelerator: 'Ctrl+Q' }
    );
  }

  return fileMenu;
}
