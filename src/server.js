const express = require('express');
const path = require('path');
const { get } = require('request');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const viewsDir = path.join(__dirname, 'views');
app.use(express.static(viewsDir));
app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
	res.sendFile(path.join(viewsDir, 'index.html'));
});


app.listen(3000, () => console.log('Listening on port 3000!'))
