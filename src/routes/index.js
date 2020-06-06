const route = require('express').Router()
const { getGigs,createGigs } = require('../controllers/gigs')

route.get('/', async (req, res) => {
   try{
    const gig = await getGigs()
    res.status(200).send(gig)
   }
   catch(err){
       console.error("problem in router layer", err)
   }
})

route.post('/add', async (req, res) => {
    try{
        const { title, technologies, description, budget, email} = req.body

        if((!title) || (!technologies) || (!description) || (!budget) || (!email)){
            return res.status(400).send({
                error: 'need title, technologies, description, budget, email to create a gig'
            })
        }

        const gig = await createGigs(title, technologies, description, budget,email)
        res.status(201).send(gig)
    }
    catch(e){
        console.error('problem in router post layer', e)
    }
})

module.exports = {
    gigRoute: route
}
