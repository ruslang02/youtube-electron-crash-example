const {
	app
} = require("electron");

app.on('ready', () => {
	const {
		BrowserWindow
	} = require("electron");
	let win = new BrowserWindow({
		webPreferences: {
			nodeIntegration: true,
			webviewTag:true
		}
	});
	win.loadFile(__dirname + "/example.html");
	win.openDevTools();
	win.show();
});