const route = require('express').Router()
const { db, Gig } = require('../db/models')

route.get('/', async (req, res) => {

    const gig = await Gig.findAll()
    res.status(200).send(gig)
})

module.exports = {
    gigRoute: route
}
