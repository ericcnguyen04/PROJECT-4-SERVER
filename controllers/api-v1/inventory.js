// create an instance of express routers
const express = require('express')
const db = require('../../models') // changed to ../../
const router = express.Router()


// GET /inventory - test endpoint
router.get('/', async (req, res) => { //change to '/inventory' from '/'
    try {
        const fit = await db.fit.findAll({})
        res.json(fit)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'server error 1i' })
    }
})

// export the router
module.exports = router