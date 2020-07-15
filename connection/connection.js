var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'us-cdbr-east-02.cleardb.com',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB
})

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })

// connection.end()