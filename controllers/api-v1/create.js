// create an instance of express routers
const express = require('express')
const db = require('../../models') // changed to ../../
const router = express.Router()

// GET /create -- show a form on creating new clothes
router.get('/create', async (req, res) => {
    try {
        const create = await db.fit.findAll({
            where: {
                nickname: req.body.nickname,
                type: req.body.type,
                status: req.body.status,
                favorite: req.body.favorite,
                duration: req.body.duration,
                userId: res.locals.user.id
            }
        })

        res.render('')
    } catch(error) {
        console.log(`Error creating: ${error}`)
        res.status(500).json({ msg: 'server error 1c' })
    }

})

// POST /create -- creation of clothing
router.post('/create', async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
})

// export the router
module.exports = router