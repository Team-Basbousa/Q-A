var pg = require('pg');
var conString = 'postgres://postgres:zxcvbn@localhost:5432/questions';

var db = new pg.Client(conString);
db.connect();

// var query = db.query(
//   `insert into questions(question_id, question_body, question_date, asker_name, question_helpfulness, reported) values (3692, 'Distinctio blanditiis quo est possimus natus et autem.', '2019-04-19', 'Lucius51', 19, 1)`
// );

// query.then((data) => console.log(data)).catch((err) => console.log(err));

// query.on('end', function () {
//   db.end();
// });

module.exports = db;
