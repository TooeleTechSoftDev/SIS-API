const express = require('express')
const router = express.Router()
const eventService = require('./student.service')

router.get('/:studentId', getByIdCB )
router.get('/list/:studentId' , getListByUserIdCb )

module.exports = router

function getByIdCB(req, res, next) {
    let data = {id: req.params.studentId,
    name: "Students Name",
     studentsId:"Students Id",

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
              className:"You are currently enrolled in ---"

            } , 
            schedule: {
              scheduleTime:"You are scheduled from --- to --- today",

              tillStart:"Your class starts in --- hours and --- minutes",

              
            
            },
            progress: {
                percent: "You are --% through --- course",

                
            },
          
           
        }
    }) 
    return await Promise.all(results)
}
