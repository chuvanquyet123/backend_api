const db = require("../commom/connect");

const Categories = function (categories) {
  this.category_id = categories.category_id;
  this.name_category = categories.name_category;
};
Categories.get_all = function (result) {
  db.query("SELECT * FROM categories", function (err, categories) {
    if (err) {
      return null;
    } else {
      result(categories);
    }
  });
};

Categories.getById = function (id, result) {
  db.query(
    "SELECT * FROM categories WHERE category_id= ?",
    id,
    function (err, categories) {
      if (err || categories.length == 0) {
        result(null);
      } else {
        result(categories[0]);
      }
    }
  );
};

Categories.create = function (data, result) {
  db.query("INSERT INTO categories SET ?", data, function (err, categories) {
    if (err) {
      result(null);
    } else {
      result({ ...data, categories_product_id: categories.insertID });
    }
  });
};

Categories.remove = function (id, result) {
  db.query(
    "DELETE FROM categories_product WHERE categories_product_id = ?",
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

Categories.update = function (b, result) {
  db.query(
    "UPDATE categories_product SET categories_id=? WHERE categories_product_id = ? ",
    [b.ategories_product_id, b.categories_id],
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

module.exports = Categories;
