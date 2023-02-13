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

// there will be no POST function in /inventory

// PUT /inventory/:id - an edit function with the idea of pop-up cards
router.put('/edit', async(req, res) => {
    try {
        //res.send(req.body.id)
        const fitEdit = await db.fit.findByPk(req.body.id)
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
router.delete('/:id', async (req, res) => {
    // console.log('delete route')
    try {
        const deleteClothes = await db.fit.findByPk(req.params.id)
        deleteClothes.destroy()
        res.redirect('/')
    } catch (error) {
        console.log(error)
    }
})

// export the router
module.exports = router