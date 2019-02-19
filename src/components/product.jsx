import React, { Component } from "react";

class Product extends Component {
  render() {
    const { product, onAddToCart } = this.props;
    const isAddedToCart = product.isAddedToCart;
    return (
      <td className="tdProduct">
        <div>
          {/* {product.id}.&nbsp; */}
          {product.name}
        </div>
        <div className="price">
          <strong>{product.price}</strong>
        </div>

        <input
          type="button"
          className={"addBtn " + (isAddedToCart ? "btnDisabled" : "btnEnabled")}
          name="add"
          disabled={isAddedToCart ? true : false}
          value={isAddedToCart ? "Added to Cart" : "Add to Cart"}
          onClick={() => onAddToCart(product.id)}
        />
      </td>
    );
  }
}

export default Product;
