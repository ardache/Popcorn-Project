const express = require('express');
const router  = express.Router();
const Question = require('../models/Question');


/* GET Question by id. */
router.get('/questions/:id', (req, res, next) => {
    Question.findById(req.params.id)
    .then(question=>{
        res.status(200).json(question)
    })
    .catch(e=>console.log(e))
});

/* POST Test */
router.post('/questions', (req, res, next) => {
  const newQuestion = new Question(req.body);
  newQuestion.save()
  .then(question=>{
      res.status(200).json(question)
  })
  .catch(e=>console.log(e))
});



module.exports = router;
