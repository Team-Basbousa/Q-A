var db = require('../db');

var getAllQuestions = (productId) => {
  return db
    .query(
      `select questions.*, answers.*
      from (select question_id,question_body, question_date,asker_name,question_helpfulness,question_reported from questions where product_id = 1) questions
      left join (select answers.*, photos.photo_id,photos.photo_url from answers left join photos on answers.answer_id = photos.answer_id) answers
      on questions.question_id = answers.question_id;`
    )
    .then((data) => {
      // console.log('gotAllQuestions//model');
      return data;
    })
    .catch((err) => console.error(err));
};
var test = () => {
  return db.query(`select * from answers where question_id = 1`);
};
module.exports = { getAllQuestions, test };

// explain analyze
// select questions.*, answers.*
// from (select question_id,question_body, question_date,asker_name,question_helpfulness,question_reported from questions where product_id = 1) questions
// left join (select answers.*, photos.photo_id,photos.photo_url from answers left join photos on answers.answer_id = photos.answer_id) answers
// on questions.question_id = answers.question_id;
