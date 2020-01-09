var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs290_yanche',
  password        : '6577',
  database        : 'cs290_yanche'
});

module.exports.pool = pool;
