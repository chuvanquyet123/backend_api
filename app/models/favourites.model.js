const db = require("../commom/connect");

const Favourites = function (favourites) {
  this.favourite_id = favourites.favourite_id;
  this.product_id = favourites.product_id;
  this.user_id = favourites.user_id;
};
Favourites.get_all = function (result, userId) {
  try {
    if (userId) {
      const query = `SELECT users.user_id, favourites.favourite_id, products.product_id, products.name_product, products.price, products.image, products.descriptions 
    FROM (users INNER JOIN favourites ON users.user_id = favourites.user_id INNER JOIN products ON products.product_id = favourites.product_id) 
    WHERE users.user_id= ${userId};`;

      db.query(query, function (err, favourites) {
        if (err) {
          console.log(err);
          return null;
        } else {
          result(favourites);
        }
      });
    } else {
      result([]);
    }
  } catch (error) {
    console.log(error);
  }
};

Favourites.getById = function (id, result) {
  db.query(
    "SELECT * FROM favourites WHERE favourite_id= ?",
    id,
    function (err, favourites) {
      if (err || favourites.length == 0) {
        result(null);
      } else {
        result(favourites[0]);
      }
    }
  );
};

Favourites.create = function (data, result) {
  db.query(
    `INSERT INTO favourites (user_id, product_id) VALUES (?, ?);`,
    [data.user_id, data.product_id],
    function (err, favourites) {
      if (err) {
        result(null);
      } else {
        result({ ...data, favourite_id: favourites.insertID});
      }
    }
  );
};

Favourites.remove = function (data, result) {
  db.query(
    `DELETE FROM favourites WHERE user_id = ? AND product_id= ?;`,
    [data.user_id, data.product_id],
    function (err, favourites) {
      if (err) {
        result(null);
      } else {
        result("delete food done ");
      }
    }
  );
};

Favourites.update = function (b, result) {
  db.query(
    "UPDATE favourites SET product_id=?, user_id=? WHERE favourite_id=? ",
    [b.product_id, b.user_id, b.user_id],
    function (err, categories) {
      if (err) {
        result(null);
      } else {
        result(b);
        return console.log("update done");
      }
    }
  );
};

module.exports = Favourites;
