import fs from 'fs';

import { dialog } from 'electron';

import { fCheck, openDialogOptions } from '../../shared/fileHelper.js';

export default function(BrowserWindow) {
  const fileMenu = {
    label: 'File',
    submenu: [
      {
        label: 'Open',
        accelerator: 'CmdOrCtrl+O',
        click() {
          dialog.showOpenDialog(openDialogOptions, filePaths => {
            if (filePaths != undefined) {
              fCheck.fileIsValid(filePaths[0])
                ? fs.readFile(filePaths[0], 'utf-8', function(
                    err,
                    fileAsString
                  ) {
                    if (err) {
                      throw err;
                    }
                    BrowserWindow.webContents.send('file-input', fileAsString);
                  })
                : console.log(fCheck.errorMsg(filePaths[0]));
            }
          });
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
