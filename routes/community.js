var express = require('express');
var router = express.Router();

const mysqlConObj = require('../config/mysql')
const db = mysqlConObj.init()
mysqlConObj.open(db)



/* GET users listing. */
router.get('/', function (req, res, next) {
    console.log('community.js' + "/" + req.query);
    var index =(req.query.index)*1;
    var endindex=10;
    var query=[index,endindex];
    db.query('select * from community LIMIT ?,?',query, (error, rows, fields) => {
        if (error) throw error;
        console.log('User info is: ' + req.path, rows);
        res.json({ "List": rows });
    });
});

module.exports = router;
