// create an instance of express routers
const express = require('express')
const db = require('../../models') // changed to ../../
const router = express.Router()
// const jwt = require('jsonwebtoken')
const authLockedRoute = require('./authLockedRoute')

// export the router
module.exports = router

