// create an instance of express routers
const express = require('express')
const db = require('../models')
const router = express.Router()

// GET /create -- show a form on creating new clothes
router.get('/', (req, res) => {
    res.render('')
})

// POST /create -- creation of clothing
router.post('/', async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
})

// export the router
module.exports = router