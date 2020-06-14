const route = require('express').Router()
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const { getGigs,createGigs } = require('../controllers/gigs')
const { Gig } = require('../db/models')

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
            const error = 'need all fields to create a job'
            return res.render('add', { error })             
        }

        await createGigs(title, technologies, description, budget, email)
        res.redirect('/gigs')
    }
    catch(e){
        console.error('problem in router post layer', e)
    }
})

//search for jobs
route.get('/search', async (req, res) => {
   try{
    let search = req.query.search
    
    const gigs = await Gig.findAll({ where : { technologies : { [Op.like] : '%' + search + '%'}}})
    res.render('gigs', { gigs })
   }
   catch(e){
       console.log('problem in search', e)
   } 
})

module.exports = {
    gigRoute: route
}
