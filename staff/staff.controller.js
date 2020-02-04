const express = require('express')
const router = express.Router()
const eventService = require('./staff.service')

router.get('/:staffId', getByIdCB )
router.get('/list/:staffId' , getListByUserIdCb )

module.exports = router

function getByIdCB(req, res, next) {
    let data = {id: req.params.staffId,
    name: "Staff name",
        id:"Staff Id"
         
    }
        res.json(data)
}



function getListByUserIdCb(req, res, next) {
    let randIds = [
        '1',
        '2',
        '3',
        '4',
        '5'
    ]


    let results = randIds.map((item) => {
        return {
    
            class: {
                className:"Your class, ---, starts in --- hours and -- minutes",
            },
            
            students: {
                amount:"You have --- students scheduled for today"
            }
        }
    }) 
    return await Promise.all(results)
}
