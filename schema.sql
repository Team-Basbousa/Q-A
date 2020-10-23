\connect questions;

DROP TABLE IF EXISTS questions CASCADE;
DROP TABLE IF EXISTS answers CASCADE;
DROP TABLE IF EXISTS photos CASCADE;


--------------

CREATE TABLE questions (
  question_id INTEGER UNIQUE DEFAULT NULL,
  product_id INTEGER DEFAULT NULL,
  question_body TEXT DEFAULT NULL,
  question_date TIMESTAMP DEFAULT NULL,
  asker_name TEXT DEFAULT NULL,
  question_helpfulness INTEGER DEFAULT NULL,
  question_reported INTEGER DEFAULT NULL,
  PRIMARY KEY (question_id)
);

CREATE INDEX on questions(product_id);

-- CREATE TABLE q_a (
--   question_id INTEGER DEFAULT NULL,
--   answer_id INTEGER UNIQUE DEFAULT NULL,
--   PRIMARY KEY (answer_id),
--   CONSTRAINT question_qa
--     FOREIGN KEY (question_id) REFERENCES questions(question_id)
-- );
-- -----------
-- CREATE TABLE q_a (id SERIAL) AS
--   SELECT question_id,answer_id FROM answers_raw;


-- CREATE INDEX q_a on q_a (question_id, answer_id);


---------------

CREATE TABLE answers (
  answer_id INTEGER UNIQUE DEFAULT NULL,
  question_id INTEGER DEFAULT NULL,
  answer_body TEXT DEFAULT NULL,
  answer_date TIMESTAMP DEFAULT NULL,
  answerer_name TEXT DEFAULT NULL,
  answer_helpfulness INTEGER DEFAULT NULL,
  answer_reported INTEGER DEFAULT NULL,
  PRIMARY KEY (answer_id),
  CONSTRAINT qa_answer
    FOREIGN KEY (question_id) REFERENCES questions(question_id)
);

CREATE INDEX on answers ( question_id);
-------------------------

CREATE TABLE photos (
  answer_id INTEGER DEFAULT NULL,
  photo_id INTEGER DEFAULT NULL,
  photo_url TEXT DEFAULT NULL,
  CONSTRAINT ans_photo
    FOREIGN KEY (answer_id) REFERENCES answers(answer_id)
);

CREATE INDEX on photos (answer_id);




-- CREATE INDEX on questions(question_id, product_id);
-- CREATE INDEX on answers (answer_id, question_id);