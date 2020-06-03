// setup code to connect to MySQL

// setup the code to connect Node to MySQL

const mysql = require("mysql");

let connection;
connection = mysql.createConnection({
  host:"localhost",
  port:"8080",
  user:"root",
  password:"1234",
  database:"burgers_db"
})

connection.connect(function(error){
  if(error){
    console.log("connection.js error - line 16 not connecting")
  } else {
    console.log("connection.js connected successfully")
  }
})
// export connection
  module.exports = connection;
//