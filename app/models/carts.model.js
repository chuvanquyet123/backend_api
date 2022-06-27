const db = require("../commom/connect");

const Carts = function (Carts) {
  this.users_id = Carts.user_id;
  this.product_id = Carts.product_id;
  this.cart_id = Carts.cart_id;
  this.product_cart_id = Carts.product_cart_id;
  this.quatity = Carts.quatity;
};
Carts.get_all = function (result, userId){
    try{
        if(userId) {
            const query = `SELECT users.user_id,  carts.cart_id,  products.product_id, products.name_product, products.price, products.image
            FROM (users
            INNER JOIN carts ON users.user_id = carts.user_id
            INNER JOIN product_cart ON carts.cart_id = product_cart.cart_id
            INNER JOIN products ON products.product_id = product_cart.product_id) 
            WHERE users.user_id= ${userId};`;

            db.query(query, function (error, carts){
                if(error){
                    console.log(error);
                    return null;
                }else{
                    result(carts)
                }
            });
        }else{
            result([])
        }
    }catch (error){
        console.log(error)
    }
};

module.exports = Carts;