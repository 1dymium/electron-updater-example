const {app, BrowserWindow} = require('electron');
const {autoUpdater} = require("electron-updater");

function createDefaultWindow() {
  win = new BrowserWindow();
  win.on('closed', () => {
    win = null;
  });
  win.loadURL(`file://${__dirname}/version.html#v${app.getVersion()}`);
  return win;
}
app.on('ready', function() {
  createDefaultWindow();
  autoUpdater.checkForUpdatesAndNotify();
});
app.on('window-all-closed', () => {
  app.quit();
});
