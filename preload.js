// preload.js
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  getSession: () => ipcRenderer.invoke("get-session"),
  getProfile: () => ipcRenderer.invoke("get-profile"),
  getTimeline: () => ipcRenderer.invoke("get-timeline"),
});
