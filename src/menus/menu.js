import { app, Menu, dialog } from 'electron';

import { homepage } from '../../package.json';

import fileMenu from './file';
import viewMenu from './view';
import infoMenu from './info';
import darwinMenu from './darwin';

export default BrowserWindow => {
  const currentYear = new Date().getFullYear();

  const showAbout = () => {
    dialog.showMessageBox({
      type: 'info',
      title: `About ${app.getName()}`,
      message: `${app.getName()} v${app.getVersion()}`,
      detail: `Source code available at\n${homepage}\n\nCopyright © 2018-${currentYear} Brian Zelip`,
      buttons: []
    });
  };

  const template = [
    ...(process.platform === 'darwin' ? [darwinMenu(showAbout)] : []),
    fileMenu(BrowserWindow),
    viewMenu(),
    infoMenu(showAbout)
  ];

  return Menu.buildFromTemplate(template);
};
