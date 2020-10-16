var db = require('../index.js');

DROP TABLE IF EXISTS q_a CASCADE;
CREATE TABLE q_a AS
  SELECT id,question_id,answer_id FROM answers_raw;

