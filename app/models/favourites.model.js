const db = require("../commom/connect");

const Favourites = function (favourites) {
  this.favourite_id = favourites.favourite_id;
  this.product_id = favourites.product_id;
  this.user_id = favourites.user_id;
};
Favourites.get_all = function (result) {
  db.query("SELECT * FROM favourites", function (err, favourites) {
    if (err) {
        console.log(err)
      return null;
    } else {
      result(favourites);
    }
  });
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
  db.query("INSERT INTO favourites SET ?", data, function (err, favourites) {
    if (err) {
      result(null);
    } else {
      result({ ...data, favourite_id: favourites.insertID });
    }
  });
};

Favourites.remove = function (id, result) {
  db.query(
    "DELETE FROM favourites WHERE favourite_id= ?",
    id,
    function (err, categories) {
      if (err) {
        result(null);
      } else {
        result("delete food done " + id);
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
