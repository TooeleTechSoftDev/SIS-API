const express = require('express')
const router = express.Router()
const eventService = require('./events.service')

router.get('/:eventId', getByIdCB )
router.get('/list/:userId' , getListByUserIdCb )

module.exports = router

function getByIdCB(req, res, next) {
    let data = {id: req.params.eventId,
    name: "someName",
        content: {
            subject: "This is a subject",
            body: "Nothing else",
        },
        type: "memo"
    }
        res.json(data)
}

async function getListByUserIdCb(req, res, next) {
    let data = await eventService.getListByUserIdCb(req.params.userId)
    res.json(data)
}

