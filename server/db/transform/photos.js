var db = require('../index.js');

//DROP TABLE IF EXISTS photos CASCADE;

// CREATE TABLE photos AS
//   SELECT * FROM photos_raw;

// crate table photos_validated AS
// select id, answer_id, photo_url from photos_raw

// insert another column using photo_id but restart count from 1 -> something else by photo_id ascending
db.query(
  `DROP TABLE IF EXISTS photos CASCADE;
  CREATE TABLE photos AS
  SELECT id,answer_id, ROW_NUMBER() OVER (PARTITION BY answer_id ORDER BY photo_id ASC) AS photo_id, photo_url FROM photos_raw;

  CREATE INDEX ON photos (answer_id);`
)
  .then(() => console.log('created photos validated'))
  .catch((err) => console.error(err));
//given product id
