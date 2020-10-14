var router = require('express').Router();
var questions = require('./controllers/questions');
//Connect controller methods to their corresponding routes
router.get('/questions', questions.get);
router.get('/questions/:question_id/answers');
// router.post('/qa/questions');
// router.post('/qa/questions/:question_id/answers');
// router.put('/qa/questions/:question_id/helpful');
// router.put('/qa/questions/:question_id/report');
// router.put('/qa/answers/:answer_id/helpful');
// router.put('/qa/answers/:answer_id/report');

module.exports = router;
