var db = require('../index.js');
db.query(
  `DROP TABLE IF EXISTS q_a CASCADE;
  CREATE TABLE q_a AS
    SELECT question_id,answer_id FROM answers_raw;

    CREATE INDEX ON q_a (question_id, answer_id);`
)
  .then(() => console.log('created q_a validated'))
  .catch((err) => console.error(err));
