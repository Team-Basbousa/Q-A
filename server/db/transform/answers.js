var db = require('../index.js');


DROP TABLE IF EXISTS answers CASCADE;
CREATE TABLE answers AS
SELECT id,answer_id,answer_body,answer_date,answerer_name,answer_helpfulness,answer_reported FROM answers_raw;