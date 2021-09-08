var express = require('express');
var router = express.Router();

const mysqlConObj = require('../config/mysql')
const db = mysqlConObj.init()
mysqlConObj.open(db)



/* GET users listing. */
router.get('/', function (req, res, next) {
    console.log('community_comment_insert.js' + "/" + req.query);
    
    var query_ID = req.query.ID;
    var query_text = req.query.TEXT;
    var query_date = req.query.DATE;
    var query_writer_ID = req.query.WRITER;

    var sql = 'INSERT INTO community_comment (_ID, TEXT, DATE, WRITER_ID) VALUES(?, ?, ?, ?)';
    var params = [query_ID, query_text, query_date, query_writer_ID]
    console.log('community_comment ' +params);

    db.query(sql,params, (error, rows, fields) => {
        if (error) throw error;
        console.log('community_comment_insert ' + req.path, rows);
        res.json({ "List": rows });
    });
});

module.exports = router;