import React from "react";

function Product({ productItem, addToCart }) {
  return (
    <div className="product-1">
      <div className="image">
        <img src={productItem.image} alt="" />
      </div>
      <div className="content-product">
        <h4>{productItem.title}</h4>
        <h2>{productItem.price}</h2>
        <div className="button-addtocart">
          <div className="buttons_added">
          </div>
          <div className="add-to-cart">
            <button onClick={() => addToCart(productItem)}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
