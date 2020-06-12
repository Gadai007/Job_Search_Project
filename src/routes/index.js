const route = require('express').Router()
const { getGigs,createGigs } = require('../controllers/gigs')

//to get the jobs
route.get('/', async (req, res) => {
   try{
    const gigs = await getGigs()
    res.render('gigs', { gigs })
   }
   catch(err){
       console.error("problem in router layer", err)
   }
})

//go to the job form
route.get('/add', (req, res) => {
    res.render('add')
})

//to submit the job form
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
