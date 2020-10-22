var db = require('../index.js');

db.query(
  `DROP TABLE IF EXISTS questions CASCADE;
  CREATE TABLE questions AS
  SELECT question_id,product_id,question_body,question_date,asker_name,question_helpfulness,question_reported FROM questions_raw;

  CREATE INDEX ON questions (product_id, question_id);`
)
  .then(() => console.log('created questions validated'))
  .catch((err) => console.error(err));
