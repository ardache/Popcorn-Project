const express = require('express');
const router  = express.Router();
const Answer = require('../models/Answer');


/* GET Answer by id. */
router.get('/answer/:id', (req, res, next) => {
  Answer.findById(req.params.id)
    .then(answer=>{
        res.status(200).json(answer)
    })
    .catch(e=>console.log(e))
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
