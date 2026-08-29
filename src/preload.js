// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require('electron/renderer')
contextBridge.exposeInMainWorld('electronAPI', {
    SalvarEntry: (data, nome, tipo, valor, desc, user) =>
        ipcRenderer.send('form-submission', data, nome, tipo, valor, desc, user),
});