var db = require('../db');

var getAllQuestions = (productId) => {
  return db
    .query(
      `select q.question_id,q.question_body, q.question_date,q.asker_name,q.question_helpfulness,q.question_reported, answers.*,photos.photo_id,photos.photo_url from
      questions as q
    left join answers
    on q.question_id = answers.question_id
    from left join photos
    on answers.answer_id = photos.answer_id
    where q.product_id = ${productId};`
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
