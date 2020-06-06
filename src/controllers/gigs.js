const { db, Gig } = require('../db/models')

async function getGigs(){
    try{
        const gigs = await Gig.findAll()
        return gigs
    }
    catch(e){
        console.error('unable to get gigs', e)
    }
}

async function createGigs(title, technologies, description, budget, email){
    try{
        const gig = await Gig.create({
            title,
            technologies,
            description,
            budget,
            email
        })
        return gig
    }
    catch(e){
        console.error('cannot create gig', e)
    }
}

module.exports = {
    getGigs,
    createGigs
}