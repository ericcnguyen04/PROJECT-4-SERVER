// create an instance of express routers
const express = require('express')
const db = require('../../models') // changed to ../../
const router = express.Router()
const authLockedRoute = require('./authLockedRoute')

// GET /inventory - test endpoint
router.get('/', authLockedRoute, async (req, res) => { //change to '/inventory' from '/'
    try {
        const fit = await db.fit.findAll({})
        res.json(fit)
    } catch (error) {
        console.log(error)
    }
})

// there will be no POST function in /inventory

// PUT /inventory/:id - an edit function with the idea of pop-up cards
router.put('/:id', authLockedRoute, async(req, res) => {
    try {
        //res.send(req.body.id)
        const fitEdit = await db.fit.findByPk(req.params.id)
        // console.log(req.params.id,'📛🚸')
        // console.log(req.body,'📛🚸')
        res.json(fitEdit)
        await fitEdit.update({
            nickname: req.body.nickname,
            type: req.body.type,
            status: req.body.status,
            favorite: req.body.favorite,
            duration: req.body.duration,
            userId: res.locals.user.id
        })
    } catch (error) {
        console.log(error)
    }
})

// DELETE /inventory/:id - a delete functino with the idea of deleting them on popup cards
router.delete('/:id', authLockedRoute, async (req, res) => {
    // console.log('delete route')
    try {
        const deleteClothes = await db.fit.findByPk(req.params.id)
        res.send(deleteClothes)
        deleteClothes.destroy()
        // res.redirect('/')
    } catch (error) {
        console.log(error)
    }
})

// export the router
module.exports = router