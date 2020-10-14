var csv = require('csv-stream');
var request = require('request');
var fs = require('fs');
var db = require('../index.js');
// All of these arguments are optional.
var options = {
  delimiter: ',', // default is ,
  endLine: '\n', // default is \n,
  // by default read the first line and use values found as columns
  escapeChar: '"', // default is an empty string
  enclosedChar: '"', // default is an empty string
};

var csvStream = csv.createStream(options);
var allValues = '';
var index = 0;
fs.createReadStream('./questions.csv')
  .pipe(csvStream)
  .on('error', function (err) {
    console.error(err);
  })
  // `insert into prod_q(product_id,question_id) values (0,0)`
  .on('data', function (data) {
    index += 1;

    var values = `(${data[' product_id']}, ${data.id}),`;
    allValues += values;

    if (index === 7000) {
      var trimmedVals = allValues.substring(0, allValues.length - 1);
      db.query(
        `insert into prod_q(product_id,question_id) values ${trimmedVals}`
      );
    }
    // queryArr.push(query);
    // console.log(queryArr.length);
    // outputs an object containing a set of key/value pair representing a line found in the csv file.
    // console.log(data);
  });
// .on('column', function (key, value) {
//   // outputs the column name associated with the value found
//   // console.log('#' + key + ' = ' + value);
//   console.log('# ' + value);
// });
