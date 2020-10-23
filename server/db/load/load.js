var db = require('../index.js');

console.log('creating questions');
var load = () => {
  db.query(
    `
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

    CREATE INDEX on questions(product_id);`
  )
    .then(() => {
      console.log('creating answers');
      return db.query(
        `
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
      `
      );
    })
    .then(() => {
      console.log('creating photos');
      return db.query(
        `CREATE TABLE photos (
          answer_id INTEGER DEFAULT NULL,
          photo_id INTEGER DEFAULT NULL,
          photo_url TEXT DEFAULT NULL,
          CONSTRAINT ans_photo
            FOREIGN KEY (answer_id) REFERENCES answers(answer_id)
        );

        CREATE INDEX on photos (answer_id);`
      );
    })
    .then(() =>
      console.log('data tables created');
    )
    .catch((err) => console.error(err));
};

load();
