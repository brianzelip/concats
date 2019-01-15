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
    ...(process.platform === 'darwin' ? [darwinMenu(showAbout)] : []),
    fileMenu(BrowserWindow),
    viewMenu(),
    windowMenu(),
    infoMenu(showAbout)
  ];

  return Menu.buildFromTemplate(template);
};
