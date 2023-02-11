// create an instance of express routers
const express = require('express')
const db = require('../models')
const router = express.Router()

// GET /create -- show a form on creating new clothes
router.get('/', (req, res) => {
    res.render('')
})

// export the router
module.exports = router