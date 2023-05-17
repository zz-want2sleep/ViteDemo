const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        // __dirname 字符串指向当前正在执行脚本的路径 (在本例中，它指向你的项目的根文件夹)。
        // path.join API 将多个路径联结在一起，创建一个跨平台的路径字符串。
        preload: path.join(__dirname, 'preload.js'),
    }
  })
  ipcMain.handle('ping', () => 'pong')
  win.loadFile('electron-index.html')
}

// app.commandLine.appendSwitch('no-sandbox');
app.whenReady().then(() => {
    createWindow()
    // 如果没有窗口打开则打开一个窗口 (macOS)
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// 关闭所有窗口时退出应用 (Windows & Linux)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})