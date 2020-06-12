const { db, Gig } = require('../db/models')

async function getGigs(){
    const gigs = await Gig.findAll()
    return gigs
}

async function createGigs(title, technologies, description, budget, email){
    const gig = await Gig.create({
        title,
        technologies,
        description,
        budget,
        email
    })
    return gig
}

module.exports = {
    getGigs,
    createGigs
}