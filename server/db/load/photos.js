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

fs.createReadStream('./answers_photos.csv')
  .pipe(csvStream)
  .on('error', function (err) {
    console.error(err);
  })
  .on('data', function (data) {
    db.query(
      `insert into photos(answer_id,photo_id,photo_url) values (${data[' answer_id']}, ${data.id}, ${data[' url']})`
    )
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
    // console.log(data[' answer_id']);
    // outputs an object containing a set of key/value pair representing a line found in the csv file.
    // console.log(data);
  });
// .on('column', function (key, value) {
//   // outputs the column name associated with the value found
//   // console.log('#' + key + ' = ' + value);
//   console.log('# ' + value);
// });
