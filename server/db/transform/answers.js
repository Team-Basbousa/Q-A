var db = require('../index.js');

db.query(
  `DROP TABLE IF EXISTS answers CASCADE;
  CREATE TABLE answers AS
  SELECT answer_id, question_id, answer_body,answer_date,answerer_name,answer_helpfulness,answer_reported FROM answers_raw;

  CREATE INDEX ON answers (answer_id);`
)
  .then(() => console.log('created answers validated'))
  .catch((err) => console.error(err));
