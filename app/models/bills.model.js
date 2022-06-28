const db = require("../commom/connect");

const Bill = function (bills) {
  this.user_id = bills.user_id;
  this.bill_id = bills.bill_id;
};

Bill.getBill = function (result, userId) {
  try {
    if (userId) {
      const query = `SELECT users.user_id, bills.bill_id, bill_product.bill_product_id, products.product_id, bill_product.price, bill_product.quantity, bills.created_at
      FROM (users
      INNER JOIN bills ON users.user_id = bills.user_id
      INNER JOIN bill_product ON bills.bill_id = bill_product.bill_id
      INNER JOIN products ON products.product_id = bill_product.product_id
      ) 
      WHERE users.user_id = ${userId};`;

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
    db.query(
        `INSERT INTO bills (bill_id, user_id) VALUES (?, ?);`,
        [data.user_id, data.bill_id],
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