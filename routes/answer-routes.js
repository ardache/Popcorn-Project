const express = require('express');
const router  = express.Router();
const Answer = require('../models/Answer');


/* GET Answer by parent */
router.get('/answer/:id', (req, res, next) => {

        Answer.find({"parent":req.params.id})
        .then(answers=>{
            res.status(200).json({answers})
        })
        //.catch(e=>console.log(e))
    
});

/* POST Answer  */
router.post('/answer', (req, res, next) => {
    const newAnswer = new Answer(req.body);
    newAnswer.save()
    .then(anwser=>{
        res.status(200).json(anwser)
    })
    .catch(e=>console.log(e))
});

module.exports = router;
