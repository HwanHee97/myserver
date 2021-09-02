var express = require('express');
var router = express.Router();
// const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '1234',
//   database : 'JSPBookDB'
// });
//connection.connect();
const mysqlConObj = require('../config/mysql')
const db = mysqlConObj.init()
mysqlConObj.open(db)


/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('alllist.js'+"/"+req.query);

  db.query('SELECT * from foodcalorie', (error, rows, fields) => {
    if (error) throw error;
    console.log('User info is: ', rows);
    res.json({"List":rows});
  });
    //res.send('테스트 페이지 입니다');
    
  });
 // connection.end();
  module.exports = router;
  