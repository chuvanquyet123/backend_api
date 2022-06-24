const db = require("../commom/connect");

const Food = function (food) {
  this.product_id = food.product_id;
  this.name_product = food.name_product;
  this.price = food.price;
  this.image = food.image;
  this.descriptions = food.descriptions;
};

Food.get_all = function (handleResult, categoryID, limit) {
  try{
    const query = categoryID
    ? `SELECT categories.category_id, categories_product.categories_product_id, products.product_id, products.name_product, products.price, products.image, products.descriptions
        FROM (products
        INNER JOIN categories_product ON products.product_id = categories_product.product_id
        INNER JOIN categories ON categories.category_id = categories_product.category_id )
        WHERE categories.category_id= ${categoryID}` + (limit? ` LIMIT ${limit};` : `;`)
    : "SELECT * FROM products";

  db.query(query, function (err, food) {
    if (err) {
      return null;
    } else {
      handleResult(food);
    }
  });
  }catch(error){
    console.log(error)
  }
  
};

Food.getById = function (id, result) {
  db.query(
    "SELECT * FROM products WHERE product_id = ?;",
    id,
    function (err, food) {
      if (err || food.length == 0) {
        result(null);
      } else {
        result(food);
      }
    }
  );
};

Food.create = function (data, result) {
  db.query("INSERT INTO products SET ?", data, function (err, food) {
    if (err) {
      result(null);
    } else {
      result({ ...data, product_id: food.insertID });
    }
  });
};

Food.remove = function (id, result) {
  db.query(
    "DELETE FROM products WHERE product_id = ?",
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
    "UPDATE products SET name_product=?, price=?, image=?, descriptions=? WHERE product_id=? ",
    [b.name_product, b.price, b.image, b.descriptions, b.id_product],
    console.log(b),
    function (err, food) {
      if (err) {
        result(null);
      } else {
        result(b);
        return console.log("update done");
      }
    }
  );
};

Food.search = function (search, result) {
  db.query(
    "SELECT * FROM products WHERE name_product LIKE ?",
    ["%" + search + "%"],
    function (err, food) {
      if (err || food.length == 0) {
        result(null);
      } else {
        console.log(food);
        result(food);
      }
    }
  );
};

module.exports = Food;
