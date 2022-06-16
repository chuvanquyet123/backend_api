const db = require("../commom/connect");

const Food = function (food) {
  this.id_product = food.id_product;
  this.name_product = food.name_product;
  this.price = food.price;
  this.image = food.image;
  this.descriptions = food.descriptions;
  this.idcate = food.idcate;
};

Food.get_all = function (result) {
  db.query("SELECT * FROM product", function (err, food) {
    if (err) {
      return null;
    } else {
      result(food);
    }
  });
};

Food.getById = function (id, result) {
  db.query(
    "SELECT * FROM product WHERE id_product = ?",
    id,
    function (err, food) {
      if (err || food.length == 0) {
        result(null);
      } else {
        result(food[0]);
      }
    }
  );
};

Food.create = function (data, result) {
  db.query("INSERT INTO product SET ?", data, function (err, food) {
    if (err) {
      result(null);
    } else {
      result({ ...data, id_product: food.insertID });
    }
  });
};

Food.remove = function (id, result) {
  db.query(
    "DELETE FROM product WHERE id_product = ?",
    id,
    function (err, food) {
      if (err) {
        result(null);
      } else {
        result("delete food done " + id);
      }
    }
  );
};

Food.update = function (b, result) {
  db.query(
    "UPDATE product SET name_product=?, price=?, image=?, descriptions=?, idcate=? WHERE id_product=? ",
    [b.name_product, b.price, b.image, b.descriptions, b.idcate, b.id_product],
    console.log(b),
    function (err, food) {
      if (err) {
        result(null);
      } else {
        result(b);
        return(console.log('update done'))
      }
    }
  );
};

module.exports = Food;
