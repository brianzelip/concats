import { resolve } from 'path';

import { app, Menu, dialog } from 'electron';

import fileMenu from './_file';
import viewMenu from './_view';
import infoMenu from './_info';
import darwinMenu from './_darwin';

export default BrowserWindow => {
  const currentYear = new Date().getFullYear();

  const showAbout = () => {
    // __dirname is actually concats/dist_electron, NOT concats/src/menus
    // console.log(resolve(__dirname, '../'));
    dialog.showMessageBox({
      type: 'info',
      title: `About ${app.getName()}`,
      message: `${app.getName()} v${app.getVersion()}`,
      detail: `See Info menu for source code\n\nCopyright © 2018-${currentYear} Brian Zelip`,
      buttons: [],
      icon: resolve(__dirname, '../build/icon.png')
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
