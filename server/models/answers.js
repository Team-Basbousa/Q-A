var db = require('../db');

var getAllAnswers = (questionId, page = 1, count = 5) => {
  return db
    .query(
      `select * from
      (select question_id,answer_id from q_a where question_id = ${questionId}) q_a
          left join answers
          on q_a.answer_id = answers.answer_id
          left join photos
          on answers.answer_id = photos.answer_id;`
    )
    .then((data) => {
      console.log('gotAllAnswers//model');
      return data;
    })
    .catch((err) => console.error(err));
};

module.exports = { getAllAnswers };

  select * from
(select question_id,answer_id from q_a where question_id = 1) q_a
    left join answers
    on q_a.answer_id = answers.answer_id
    left join photos
    on answers.answer_id = photos.answer_id;