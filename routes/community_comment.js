var express = require('express');
var router = express.Router();

const mysqlConObj = require('../config/mysql')
const db = mysqlConObj.init()
mysqlConObj.open(db)



/* GET users listing. */
router.get('/', function (req, res, next) {
    console.log('community_comment.js' + "/" + req.query);
    db.query('select TEXT, DATE, WRITER_ID from community_comment where _ID =? ',req.query.ID, (error, rows, fields) => {
        if (error) throw error;
        console.log('community_comment ' + req.path, rows);
        res.json({ "List": rows });
    });
});

module.exports = router;