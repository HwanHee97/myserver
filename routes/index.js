var express = require('express');
var router = express.Router();

/* GET home page. */
let users = '{"List":[ { "id": "1", "username": "darren" }, { "id": "2", "username": "martin" },{ "id": "3", "username": "bong" }]}';
const ooo=JSON.parse(users);
router.get('/', function(req, res, next) {
res.json(ooo);
});

module.exports = router;
