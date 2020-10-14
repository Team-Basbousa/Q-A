\connect questions;






DROP TABLE IF EXISTS questions.prod_q;

CREATE TABLE questions.prod_q (
  id SERIAL,
  product_id INTEGER DEFAULT NULL,
  question_id INTEGER UNIQUE DEFAULT NULL,
  PRIMARY KEY (id, question_id)
);



DROP TABLE IF EXISTS questions.questions;

CREATE TABLE questions.questions (
  id SERIAL,
  question_id INTEGER DEFAULT NULL,
  question_body TEXT DEFAULT NULL,
  question_date TIMESTAMP DEFAULT NULL,
  asker_name TEXT DEFAULT NULL,
  question_helpfulness INTEGER DEFAULT NULL,
  reported INTEGER DEFAULT NULL,
  PRIMARY KEY (id, question_id),
  CONSTRAINT prod_question
    FOREIGN KEY (question_id) REFERENCES questions.prod_q(question_id)
);


DROP TABLE IF EXISTS questions.q_a;

CREATE TABLE questions.q_a (
  id SERIAL,
  question_id INTEGER DEFAULT NULL,
  answer_id INTEGER DEFAULT NULL,
  PRIMARY KEY (id, answer_id),
  CONSTRAINT question_qa
    FOREIGN KEY (question_id) REFERENCES questions.questions(question_id)
);


DROP TABLE IF EXISTS questions.answers;

CREATE TABLE questions.answers (
  id SERIAL,
  answer_id INTEGER NULL DEFAULT NULL,
  answer_body TEXT NULL DEFAULT NULL,
  answer_date TIMESTAMP NULL DEFAULT NULL,
  answerer_name TEXT NULL DEFAULT NULL,
  answer_helpfulness INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id,answer_id),
  CONSTRAINT qa_answer
    FOREIGN KEY (answer_id) REFERENCES questions.q_a(answer_id)
);


DROP TABLE IF EXISTS questions.photos;

CREATE TABLE questions.photos (
  id SERIAL,
  answer_id INTEGER NULL DEFAULT NULL,
  photo_id INTEGER NULL DEFAULT NULL,
  photo_url TEXT NULL DEFAULT NULL,
  PRIMARY KEY (id, photo_id),
  CONSTRAINT ans_photo
    FOREIGN KEY (answer_id) REFERENCES questions.answers(answer_id)
);



-- Table Properties
-- ---

-- ALTER TABLE questions ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE prod_q ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE q_a ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE answers ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE photos ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE mongo_q_a ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE mongo_prod_q ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO questions (id,question_id,question_body,question_date,asker_name,question_helpfulness,reported,new field) VALUES
-- ('','','','','','','','');
-- INSERT INTO prod_q (id,product_id,question_id) VALUES
-- ('','','');
-- INSERT INTO q_a (id,question_id,answer_id) VALUES
-- ('','','');
-- INSERT INTO answers (id,answer_id,answer_body,answer_date,answerer_name,answer_helpfulness,answer_photo_id) VALUES
-- ('','','','','','','');
-- INSERT INTO photos (id,answer_id,photo_id,photo_url) VALUES
-- ('','','','');
-- INSERT INTO mongo_q_a (id,question_id,answer_id) VALUES
-- ('','','');
-- INSERT INTO mongo_prod_q (product_id,question_id) VALUES
-- ('','');