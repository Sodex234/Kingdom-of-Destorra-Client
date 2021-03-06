const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");

let win;

var showDev = false;

function createWindow() {
	win = new BrowserWindow({
		width: 800,
		height: 600
	});
	
	win.setMenu(null);
	
	if(showDev) {
		win.webContents.openDevTools();
	}
	
	win.loadURL(url.format({
		pathname: path.join(__dirname, "index.html"),
		protocol: "file:",
		slashes: true
	}));
	
	win.on("closed", () => {
		win = null;
	});
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
	if(process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if(win === null) {
		createWindow();
	}
});
