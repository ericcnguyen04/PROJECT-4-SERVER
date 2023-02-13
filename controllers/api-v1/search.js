// create an instance of express routers
const express = require('express')
const db = require('../../models') // changed to ../../
const router = express.Router()

// GET /search
router.get('/', async (req, res) => {
    try {
        const fit = await db.fit.findAll({})
        res.json(fit)
    } catch (err) {
        console.log(err)
        if (err.kind === "ObjectId") {
            res.status(404).json({ msg: err.message })
        } else {
            res.status(500).json({ msg: 'server error 1s' })
        }
    }
})



// GET /search/whatever user is looking for
// dont know if its id :id

// So we want to have a search filter thing where when we type out lets say 'shirt', it will display all shirts, if we type 'pants', it will display all pants,
//  im assuming that would be done in the client side? unless we can make the parameters the string type we want

// in our database, we have a column 'type:string' and when we create(add) a new piece to our db, its a dropdown so the 'type' in the database will be specific to either shirt, pants or shoes. 

// if thats get too complicated, we have another idea where the search page will be more of a filter dropdown thing where we click on the type 'string' we are looking for and it looks for what keyword in the db. which is more effective/less complicated


router.get('/:type', async (req, res) => {
    try {
        // look up a event using the id from the request parameters
        const pieces = await db.fit.findAll(req.params.type) //findAll since we want to find all shirts and pants etc; 
        
        // if the piece is not found, respond with 404
        if (!pieces) {
            res.status(404).json({ msg: "not found" })
            return // don't want to send headers twice, stop the function
        }
        // respond with the event we found
        res.json(fit)
    } catch (err) {
        console.log(err)
        if (err.kind === "ObjectId") {
            res.status(404).json({ msg: err.message })
        } else {
            res.status(500).json({ msg: 'server error 2s' })
        }
    }
})

// also in the search page, it will be displaying all clothes from the db and you can either filter or just scroll down but they all will have the same feature. If you find the one you are looking for, you just have to click it and it will display a pop up of the info of that piece. info is 'availability(boolean), nickname'. so doing this, would we need a get router with parameters of id? Note: check both blocks of code
// is inventory.js correct or med rare
// ----/:type/:id to get a specific shirt/pant/shoes ex: find all shirts, now find that specific shirt ----- how to associate specific items via fit models 
router.get('/:type/:id', async (req, res) => {
    try {
        // look up a event using the id from the request parameters
        const pieceInfo = await db.fit.findById(req.params.id)
        
        // if the piece is not found, respond with 404
        if (!piece) {
            res.status(404).json({ msg: "not found" })
            return // don't want to send headers twice, stop the function
        }
        // respond with the event we found
        res.json(fit)
    } catch (err) {
        console.log(err)
        if (err.kind === "ObjectId") {
            res.status(404).json({ msg: err.message })
        } else {
            res.status(500).json({ msg: 'server error 3s' })
        }
    }
})






// export the router
module.exports = router