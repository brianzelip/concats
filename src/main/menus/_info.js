import { app, shell } from 'electron';

import { homepage } from '../../../package.json';

export default showAbout => {
  const submenu = [
    {
      label: 'Go to concats homepage →',
      click() {
        shell.openExternal(homepage);
      }
    }
  ];

  if (process.platform !== 'darwin') {
    submenu.unshift({
      label: `About ${app.getName()}`,
      click() {
        showAbout();
      }
    });
  }

  return {
    label: 'Info',
    submenu
  };
};
