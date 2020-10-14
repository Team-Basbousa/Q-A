var pg = require('pg');
var conString = 'postgres://postgres:zxcvbn@localhost:5432/questions';

var db = new pg.Client(conString);
db.connect();

// var query = db.query(`insert into prod_q(product_id,question_id) values (0,0)`);
// //fired after last row is emitted

// query.then((data) => console.log(data)).catch((err) => console.log(err));
// query.on('row', function (row) {
//   console.log(row);
// });

// query.on('end', function () {
//   db.end();
// });

module.exports = db;
