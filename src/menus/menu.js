import { Menu, dialog } from 'electron';

import fileMenu from './file';
import viewMenu from './view';
import windowMenu from './window';
import infoMenu from './info';
import darwinMenu from './darwin';

export default BrowserWindow => {
  const showAbout = () => {
    dialog.showMessageBox(BrowserWindow, {
      type: 'info',
      title: 'About concats',
      message: 'This is the message!',
      detail: 'This is the detail.'
    });
  };

  const template = [
    fileMenu(BrowserWindow),
    viewMenu(),
    windowMenu(),
    infoMenu(showAbout)
  ];

  if (process.platform === 'darwin') {
    template.unshift(darwinMenu(showAbout));

    // Window menu
    template[3].submenu = [
      { role: 'close' },
      { role: 'minimize' },
      { role: 'zoom' },
      { type: 'separator' },
      { role: 'front' }
    ];
  }

  return Menu.buildFromTemplate(template);
};
