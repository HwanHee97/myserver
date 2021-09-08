var express = require('express');
var router = express.Router();
// const mysql = require('mysql');
// const db = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '1234',
//   database : 'calorieandlife'
// });
const mysqlConObj = require('../config/mysql')
const db = mysqlConObj.init()
mysqlConObj.open(db)


//var sql= 'select * from foodcalorie where FOOD like "%?%"';
/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log('select.js' + "/" + req.query);
  var query = "%" + req.query.FOOD + "%";
  console.log(query);

  //  db.query('SELECT * from member where name = ?',[req.query.name], (error, rows, fields) => {
  db.query('select DISTINCT FOOD,CALORIE, SOURCE from foodcalorie where FOOD like ?', [query], (error, rows, fields) => {
    if (error) throw error;
    console.log('User info is: ' + req.query.FOOD, rows);
    res.json({ "List": rows });
  });
  //res.send('테스트 페이지 입니다');

});

module.exports = router;
