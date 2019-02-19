import React, { PureComponent } from "react";

import Product from "./product";

class ProductsGrid extends PureComponent {
  render() {
    const { products, onAddToCart } = this.props;
    let prod3 = [];
    let p = [];
    let count = 0,
      keyIndexTr = 0;

    products.forEach((element, index) => {
      p.push(
        <Product key={index} product={element} onAddToCart={onAddToCart} />
      );
      count++;
      if (count === 3 || index === products.length - 1) {
        prod3.push(<tr key={keyIndexTr++}>{p}</tr>);
        p = [];
        count = 0;
      }
    });

    return (
      <div className="productGrid">
        <table className="productTbl">
          <tbody>{prod3}</tbody>
        </table>
      </div>
    );
  }
}

export default ProductsGrid;
