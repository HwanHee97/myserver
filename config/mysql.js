const mysql = require('mysql');

const mysqlConnection = { 
    init: function() { 
    return mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '1234',
        //database : 'JSPBookDB'
        database : 'calorieandlife'
      });
    },
    open: function(con) { 
        con.connect(err=>{
            if(err){
                console.log("DB연결 실패:",err);
            }else{
                console.log("DB연결 성공!!:");
            }
        });
    },close:function(con){
        con.end(err=>{
            if(err){
                console.log("DB종료 실패:",err);
            }else{
                console.log("DB종료 성공!!:");
            }
        });
    }
}
module.exports = mysqlConnection;
