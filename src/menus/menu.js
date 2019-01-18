import { app, Menu, dialog } from 'electron';

import fileMenu from './_file';
import viewMenu from './_view';
import infoMenu from './_info';
import darwinMenu from './_darwin';

export default BrowserWindow => {
  const currentYear = new Date().getFullYear();

  const showAbout = () => {
    dialog.showMessageBox({
      type: 'info',
      title: `About ${app.getName()}`,
      message: `${app.getName()} v${app.getVersion()}`,
      detail: `Made with Electron.js and Vue.js.\nSee the Info menu for a link to the source code.\n\nCopyright © 2018-${currentYear} Brian Zelip`,
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
