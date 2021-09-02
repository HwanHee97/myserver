var express = require('express');
var router = express.Router();

const mysqlConObj = require('../config/mysql')
const db = mysqlConObj.init()
mysqlConObj.open(db)



/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log('insert.js'+"/"+req.query);
    var query_food =  req.query.FOOD ;
    var query_calorie =  req.query.CALORIE ;
    var query_source =  req.query.SOURCE ;
    console.log(query_food+query_calorie+query_source);
    
    //console.log(query);
    var sql = 'INSERT INTO foodcalorie (FOOD, CALORIE, SOURCE) VALUES(?, ?, ?)'; 
    var params = [query_food,query_calorie,query_source]

    db.query(sql,params, (error, rows, fields) => {
    if (error) throw error;
    console.log('User info is: '+req.query.name, rows);
    res.send("성공");
  });
    //res.send('테스트 페이지 입니다');
    
  });

  module.exports = router;
  