// const mysql = require('mysql2');
const sqlite3 = require('sqlite3').verbose();

const connection = new sqlite3.Database("./db.sqlite3" , sqlite3.OPENREADWRITE , (err) =>{
  if (err)  return console.error(err.message);
  console.log("connected")
})

// const connection = mysql.createConnection({
//   host: 'localhost',
//   port: 3306,
//   user: 'root',
//   password: '12345678',
//   database: 'todo',
// });

module.exports = connection;