var express = require('express');
var router = express.Router();

const mysqlConObj = require('../config/mysql')
const db = mysqlConObj.init()
mysqlConObj.open(db)
function getFormatDate(date) {
    var year = date.getFullYear();
    var month = (1 + date.getMonth());
    month = month >= 10 ? month : '0' + month;
    var day = date.getDate();
    day = day >= 10 ? day : '0' + day;
    return year + '-' + month + '-' + day;
}


/* GET users listing. */
router.get('/', function (req, res, next) {
    console.log('community_insert.js' + "/" + req.query);

    var query_title = req.query.TITLE;
    var query_text = req.query.TEXT;
    var query_writer_ID = req.query.WRITER;

    var tmp_date = new Date();
    var date = getFormatDate(tmp_date);

    var sql = 'INSERT INTO community (TITLE, TEXT, DATE, WRITER_ID) VALUES(?, ?, ?, ?)';
    var params = [query_title, query_text, date, query_writer_ID]

    db.query(sql, params, (error, rows, fields) => {
        if (error) throw error;
        console.log('User info is: ' + req.query.name, rows);
        res.json({ "List": rows });
    });
});

module.exports = router;