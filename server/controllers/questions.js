var questions = require('../models/questions');

var test = (req, res) => {
  questions
    .test()
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(500).send(err));
};

var get = (req, res) => {
  //call model functions
  var retObj = {};
  var results = {};

  questions
    .getAllQuestions(req.query.product_id)
    .then((datas) => {
      console.log('gotAllQuestions//controller');
      for (var obj in datas.rows) {
        var data = datas.rows[obj];
        var id = data.question_id;
        if (!results[id]) {
          results[id] = {};
          results[id].question_id = data.question_id;
          results[id].question_body = data.question_body;
          results[id].question_date = data.question_date;
          results[id].asker_name = data.asker_name;
          results[id].question_helpfulness = data.question_helpfulness;
          results[id].reported = data.question_reported;
          console.log(results[id]);
        }
        if (!results[id].answers) {
          results[id].answers = {};
        }
        //questions handlers

        //answers handlers
        var answer_id = data.answer_id;
        if (answer_id != null) {
          if (!results[id].answers[answer_id]) {
            results[id].answers[Number(answer_id)] = {};
            results[id].answers[answer_id].id = answer_id;
            results[id].answers[answer_id].body = data.answer_body;
            results[id].answers[answer_id].date = data.answer_date;
            results[id].answers[answer_id].answerer_name = data.answerer_name;
            results[id].answers[answer_id].helpfulness =
              data.answer_helpfulness;
            results[id].answers[answer_id].photos = [];
          }
          //photo handler
          if (data.photo_url != null) {
            var photo = { id: data.photo_id, url: data.photo_url };
            results[id].answers[answer_id].photos.push(photo);
          }
        }
      }
      retObj.product_id = req.query.product_id;
      retObj.results = [];
      for (let item in results) {
        retObj.results.push(results[item]);
      }
      console.log(retObj);
      res.status(200).send(retObj);
    })
    .catch((err) => console.error(err));
};

module.exports = { get, test };
