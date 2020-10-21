var db = require('../index.js');

console.log('creating questions_raw');
var loadRaw = () => {
  db.query(
    `
    DROP TABLE IF EXISTS questions_raw CASCADE;
    CREATE TABLE questions_raw (
    id SERIAL,
    question_id INTEGER UNIQUE DEFAULT NULL,
    product_id INTEGER DEFAULT NULL,
    question_body TEXT DEFAULT NULL,
    question_date TIMESTAMP DEFAULT NULL,
    asker_name TEXT DEFAULT NULL,
    asker_email TEXT DEFAULT NULL,
    question_helpfulness INTEGER DEFAULT NULL,
    question_reported INTEGER DEFAULT NULL,
    PRIMARY KEY (id)
  );`
  )
    .then(() => {
      console.log('creating answers_raw');
      return db.query(`DROP TABLE IF EXISTS answers_raw CASCADE;
    CREATE TABLE answers_raw (
    id SERIAL,
    answer_id INTEGER UNIQUE DEFAULT NULL,
    question_id INTEGER DEFAULT NULL,
    answer_body TEXT DEFAULT NULL,
    answer_date TIMESTAMP DEFAULT NULL,
    answerer_name TEXT DEFAULT NULL,
    answerer_email TEXT DEFAULT NULL,
    answer_helpfulness INTEGER DEFAULT NULL,
    answer_reported INTEGER DEFAULT NULL,
    PRIMARY KEY (id)
  );`);
    })
    .then(() => {
      console.log('creating photos_raw');
      return db.query(
        `DROP TABLE IF EXISTS photos_raw CASCADE;
      CREATE TABLE photos_raw (
      id SERIAL,
      photo_id INTEGER DEFAULT NULL,
      answer_id INTEGER DEFAULT NULL,
      photo_url TEXT DEFAULT NULL,
      PRIMARY KEY (id)
      );`
      );
    })
    .then(() => {
      console.log('raw data tables created');
    })
    .catch((err) => console.error(err));
};

loadRaw();
