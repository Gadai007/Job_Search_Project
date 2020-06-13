const express = require('express')
const exphbs = require('express-handlebars')

const path = require('path')
const { db } = require('./db/models')
const { gigRoute } = require('./routes')


const app = express()

const PORT = process.env.PORT || 1221

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

//handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, '../views'))

//static 
app.use(express.static(path.join(__dirname, '../public')))

//routers
app.use('/gigs', gigRoute)

//server request
app.get('/', (req, res) => {
    res.render('index', { layout : 'landing'})
})

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