const db = require("../commom/connect");

const Bill = function (bills) {
  this.user_id = bills.user_id;
  this.bill_id = bills.bill_id;
};

Bill.getBill = function (result, userId) {
  try {
    if (userId) {
      const query = `SELECT users.user_id, bills.bill_id, bills.created_at
      FROM (users
      INNER JOIN bills ON users.user_id = bills.user_id
      ) 
      WHERE users.user_id = ${userId} GROUP BY bills.bill_id;`;

      db.query(query, function (error, bills) {
        if (error) {
          console.log(error);
          return null;
        } else {
          result(bills);
        }
      });
    } else {
      result([]);
    }
  } catch (error) {
    console.log(error);
  }
};

Bill.create = function(data, result){
  const getDateTime = new Date().toISOString().slice(0, 19).replace(' ', ' ');
    db.query(
        `INSERT INTO bills ( user_id, created_at) VALUES ( ?, ?);`,
        [data.user_id, getDateTime],
        function (error, bills) {
            if (error){
                result(null);
            } else{
                result({...data, bill_id: bills.insertID});
            }
        }
    );
};

module.exports = Bill;