const express = require('express');
const router  = express.Router();
const Question = require('../models/Question');


/* GET All Question */
router.get('/questions', (req, res, next) => {
    Question.find()
    .then(questions=>{
        res.status(200).json({questions})
    })
    .catch(e=>console.log(e))
});

/* GET Question by id. */
router.get('/questions/:id', (req, res, next) => {
    Question.findById(req.params.id)
    .then(question=>{
        res.status(200).json(question)
    })
    .catch(e=>console.log(e))
});

/* Delete by id  */
router.delete('/questions/:id', (req, res, next) => {
    Question.findByIdAndRemove(req.params.id)
    .then(()=>{
        res.status(200).json({ message: `Question with ${req.params.id} was removed successfully.` })
    })
    .catch(e=>console.log(e))
});

/* GET Question by branch. */
router.get('/questionsbybranch/:branch', (req, res, next) => {
    Question.find({"branch":req.params.branch})
    .populate('questions')
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
