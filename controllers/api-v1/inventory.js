// create an instance of express routers
const express = require('express')
const db = require('../models')
const router = express.Router()


// GET /inventory - test endpoint
router.get('/', async (req, res) => {
    try {
        const fit = await db.fit.findAll({})
        res.json(fit)
    } catch (error) {
        console.log(error)
    }
})

// export the router
module.exports = router