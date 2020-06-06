const express = require('express')
const hbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const { db } = require('./db/models')

const app = express()

const PORT = process.env.PORT || 1221

//test db connection
db.authenticate()
    .then(() => console.log('db is connected'))
    .catch((err) => console.error('db not connected', err))

app.get('/', (req,res) => res.send('Working fine'))

app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`)
})