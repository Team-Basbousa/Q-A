var pg = require('pg');

var db = new pg.Client({
  host: 'db',
  password: 'zxcvbn',
  port: 5432,
  user: 'postgres',
  database: 'questions',
});
db.connect((err) => {
  if (err) {
    console.error(err);
    console.error('Error connecting to PG');
  } else {
    console.log('Connected to PostgresDB');
  }
});

// var query = db.query(
//   `insert into questions(question_id, question_body, question_date, asker_name, question_helpfulness, reported) values (3692, 'Distinctio blanditiis quo est possimus natus et autem.', '2019-04-19', 'Lucius51', 19, 1)`
// );

// query.then((data) => console.log(data)).catch((err) => console.log(err));

// query.on('end', function () {
//   db.end();
// });

module.exports = db;
