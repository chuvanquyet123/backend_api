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
      WHERE users.user_id = ${userId} GROUP BY bills.bill_id ORDER BY bills.created_at DESC;`;

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

Bill.create = function (data, result) {
  console.log("data = ", data);
  const getDateTime = new Date().toISOString().slice(0, 19).replace(" ", " ");

  const saveBillProducts = (billId) => {
    const products = data.cart.map(
      (item, index) =>
        `(${billId}, ${item.product.product_id}, ${item.amount}, ${item.product.price})` +
        (index < data.cart.length - 1 ? "," : "")
    );

    const sqlProducts = products.join("");

    console.log("products =", products)
    console.log("sqlProducts = ", sqlProducts);

    db.query(
      `INSERT INTO bill_product ( bill_id, product_id, quantity, price) VALUES ${sqlProducts};`,
      
      function (error, billProducts) {
        console.log("billProducts =", billProducts)
        if (error) {
          result(null);
        } else {
           result(billProducts);
        }
      }
    );
  };

  db.query(
    `INSERT INTO bills ( user_id, created_at) VALUES ( ?, ?);`,
    [data.user_id, getDateTime],
    function (error, bill) {
      if (error) {
        result(null);
      } else {
        //console.log("bill ===", bill)
        // result({ ...data, bill_id: bills.insertID });
        saveBillProducts(bill.insertId);
      }
    }
  );
};

Bill.getById = function (billId, result, userId) {
  try {
    console.log("billId", billId);
    console.log("userId", userId);
    if (userId) {
      db.query(
        `SELECT bills.created_at, products.name_product, products.image, bill_product.quantity, bill_product.price
        FROM (bills
        INNER JOIN bill_product ON bills.bill_id = bill_product.bill_id
        INNER JOIN products ON products.product_id = bill_product.product_id
        ) 
        WHERE bill_product.bill_id = ? ;`,
        billId,
        function (error, bills) {
          if (error || bills.length == 0) {
            result([]);
          } else {
            result(bills);
          }
        }
      );
    } else {
      result([]);
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = Bill;
