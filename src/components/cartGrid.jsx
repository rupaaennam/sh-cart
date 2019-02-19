import React, { Component } from "react";

class CartGrid extends Component {
  state = {
    maxVal: 10,
    qtyArr: []
  };

  componentWillMount() {
    this.buildQuantityValues();
  }

  buildQuantityValues = () => {
    let { maxVal, qtyArr } = this.state;
    for (let i = 1; i <= maxVal; i++) {
      qtyArr.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return qtyArr;
  };

  calTotalPrice = cartProducts => {
    if (cartProducts.length > 0) {
      return cartProducts.reduce(
        (sum, a) => sum + parseFloat(a.subTotal.slice(1)),
        0
      );
    }
  };

  render() {
    const { cartProducts, onDelete, onQtyChange } = this.props;
    let totalPrice = this.calTotalPrice(cartProducts);
    if (cartProducts.length == 0 ) { }
    let formattedTotalPrice;
    if (totalPrice > 0) {
      formattedTotalPrice = "$" + totalPrice.toFixed(2);
      formattedTotalPrice = (
        <div className="totalPrice">{formattedTotalPrice}</div>
      );
    } else {
      formattedTotalPrice = "";
    }

    return (
      <div className={"cartGrid " + ( cartProducts.length == 0 ? "borderNone" : "border")  }>
        <ol>
          {cartProducts.map(prod => (
            <li key={prod.id}>
              <div className="prodDetails">
                <span className="prodName">{prod.name}</span>
                <div className="qtyDetails">
                <span className="qty">Qty: </span>
                <select
                  id="qty"
                  name="quantity"
                  onChange={e => onQtyChange(prod.id, e)}
                >
                  {this.state.qtyArr}
                  </select>
                </div>
              </div>
              <div className="prodPrice">{prod.subTotal}</div>
              <button onClick={() => onDelete(prod.id)}>x</button>
            </li>
          ))}
        </ol>
        {formattedTotalPrice}
      </div>
    );
  }
}

export default CartGrid;
