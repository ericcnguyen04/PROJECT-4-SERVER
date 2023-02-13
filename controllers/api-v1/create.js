// create an instance of express routers
const express = require('express')
const db = require('../../models') // changed to ../../
const router = express.Router()
const authLockedRoute = require('./authLockedRoute')
const jwt = require('jsonwebtoken')

// // GET /create -- show a form on creating new clothes
// router.get('/create', async (req, res) => {
//     try {
       
//     } catch(error) {
//         console.log(`Error creating: ${error}`)
//         res.status(500).json({ msg: 'server error 1c' })
//     }

// })

// POST /create -- creation of clothing
router.post('/', authLockedRoute, async (req, res) => {
    try {
        const create = await db.fit.create({
            nickname: req.body.nickname,
            type: req.body.type,
            status: req.body.status,
            favorite: req.body.favorite,
            duration: req.body.duration,
            userId: res.locals.user.id
        })
        console.log(req.body)
        res.status(201).json(create)
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:'server error'})
    }
})

// GET /auth-locked - will redirect if bad jwt token is found
router.get('/auth-locked', authLockedRoute, (req, res) => {
    res.json( { msg: 'welcome to the private route!' })
  })

// export the router
module.exports = router

