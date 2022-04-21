const express = require('express');
const app = express();
app.get('/', function (req, res) {
	console.log("/index.html" );
	res.sendFile('/index.html', { root: __dirname });
});
app.get('/script_for_web_page.js', function (req, res) {
	console.log("/script_for_web_page.js" );
	res.sendFile('/script_for_web_page.js', { root: __dirname });
});

const port = 8080; 
const server = app.listen(port, function () {
	console.log(`running at localhost:${port}/`);
});
