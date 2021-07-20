const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const viewsDir = path.join(__dirname, 'views')
 app.use(express.static(path.join(__dirname, './public')));


app.get('/', (req, res) => res.sendFile(path.join(viewsDir, 'index.html')))
