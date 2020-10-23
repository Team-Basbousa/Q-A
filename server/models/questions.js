var db = require('../db');

var getAllQuestions = (productId) => {
  return db
    .query(
      `select q.question_id,q.question_body, q.question_date,q.asker_name,q.question_helpfulness,q.question_reported, answers.*,photos.photo_id,photos.photo_url from (select * from questions where product_id = ${productId}) q
    left join answers
    on q.question_id = answers.question_id
    left join photos
    on answers.answer_id = photos.answer_id;`
    )
    .then((data) => {
      // console.log('gotAllQuestions//model');
      return data;
    })
    .catch((err) => console.error(err));
};
var test = () => {
  return db.query(`select * from photos_raw`);
};
module.exports = { getAllQuestions, test };
