var csv = require('csv-stream');
var request = require('request');
var fs = require('fs');
var db = require('../index.js');
// All of these arguments are optional.

db.query(
  `
 COPY photos_raw(photo_id, answer_id, photo_url)
 FROM '/Users/danielkang/HR/SDC/Q-A/answers_photos.csv'
 DELIMITER ','
 CSV HEADER;
 `
)
  .then((data) => {
    console.log('copied photos');
    return db
      .query(
        `
    COPY answers_raw(answer_id, question_id, answer_body, answer_date, answerer_name,answerer_email, answer_helpfulness, answer_reported)
    FROM '/Users/danielkang/HR/SDC/Q-A/answers.csv'
    DELIMITER ','
    CSV HEADER;
    `
      )
      .catch((err) => console.error(err));
  })
  .then((data) => {
    console.log('copied answers');
    return db
      .query(
        `
      COPY questions_raw(question_id, product_id, question_body, question_date, asker_name,asker_email, question_helpfulness, question_reported)
      FROM '/Users/danielkang/HR/SDC/Q-A/questions.csv'
      DELIMITER ','
      CSV HEADER;
      `
      )
      .catch((err) => console.error(err));
  })
  .then(() => console.log('copied Questions'))
  .catch((err) => console.error(err));

// console.log(__dirname__);
