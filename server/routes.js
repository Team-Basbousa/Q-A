var router = require('express').Router();
var questions = require('./controllers/questions');
//Connect controller methods to their corresponding routes
router.get('/questions', questions.get);

module.exports = router;
