import { app, Menu, dialog } from 'electron';

import icon from '../iconPath';
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
      detail: `See Info menu for source code\n\nCopyright © 2018-${currentYear} Brian Zelip`,
      buttons: [],
      icon
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
