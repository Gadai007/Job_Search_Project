const express = require('express')
const hbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const { db } = require('./db/models')
const { gigRoute } = require('./routes')

const app = express()

const PORT = process.env.PORT || 1221

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

//routers
app.use('/gigs', gigRoute)

//database synchronised
db.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`server started on http://localhost:${PORT}`)
        })
    })
    .catch((err) => {
        console.error('Database not started', err)
    })