import { app } from 'electron';

export default showAbout => {
  return {
    label: app.getName(),
    submenu: [
      {
        label: 'About concats',
        click() {
          showAbout();
        }
      },
      { type: 'separator' },
      { role: 'services' },
      { type: 'separator' },
      { role: 'hide' },
      { role: 'hideothers' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'quit' }
    ]
  };
};
