\connect questions;

DROP TABLE IF EXISTS prod_q CASCADE;
DROP TABLE IF EXISTS questions CASCADE;
DROP TABLE IF EXISTS q_a CASCADE;
DROP TABLE IF EXISTS answers CASCADE;
DROP TABLE IF EXISTS photos CASCADE;


--------------
-- CREATE TABLE questions AS
--   SELECT id,question_id,product_id,question_body,question_date,asker_name,question_helpfulness,question_reported FROM questions_raw;


CREATE TABLE questions (
  id SERIAL,
  question_id INTEGER UNIQUE DEFAULT NULL,
  product_id INTEGER DEFAULT NULL,
  question_body TEXT DEFAULT NULL,
  question_date TIMESTAMP DEFAULT NULL,
  asker_name TEXT DEFAULT NULL,
  question_helpfulness INTEGER DEFAULT NULL,
  question_reported INTEGER DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE INDEX questions on questions(question_id, product_id);

-- CREATE TABLE q_a (
--   id SERIAL,
--   question_id INTEGER DEFAULT NULL,
--   answer_id INTEGER UNIQUE DEFAULT NULL,
--   PRIMARY KEY (id),
--   CONSTRAINT question_qa
--     FOREIGN KEY (question_id) REFERENCES questions(question_id)
-- );
-- -----------
-- CREATE TABLE q_a (id SERIAL) AS
--   SELECT question_id,answer_id FROM answers_raw;


--CREATE INDEX q_a on q_a (question_id, answer_id);


---------------
CREATE TABLE answers AS
  SELECT id,answer_id,answer_body,answer_date,answerer_name,answer_helpfulness,answer_reported FROM answers_raw;

CREATE TABLE answers (
  id SERIAL,
  answer_id INTEGER UNIQUE DEFAULT NULL,
  answer_body TEXT DEFAULT NULL,
  answer_date TIMESTAMP DEFAULT NULL,
  answerer_name TEXT DEFAULT NULL,
  answer_helpfulness INTEGER DEFAULT NULL,
  answer_reported INTEGER DEFAULT NULL,
  PRIMARY KEY (id,answer_id),
  CONSTRAINT qa_answer
    FOREIGN KEY (answer_id) REFERENCES q_a(answer_id)
);

CREATE INDEX answers on answers (answer_id);
-------------------------

CREATE TABLE photos AS
  SELECT * FROM photos_raw;

CREATE TABLE photos (
  id SERIAL,
  answer_id INTEGER DEFAULT NULL,
  photo_id INTEGER DEFAULT NULL,
  photo_url TEXT DEFAULT NULL,
  PRIMARY KEY (id, photo_id),
  CONSTRAINT ans_photo
    FOREIGN KEY (answer_id) REFERENCES answers(answer_id)
);

CREATE INDEX photos on photos (answer_id);
