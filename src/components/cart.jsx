import React, { Component } from "react";

class Cart extends Component {
  render() {
    return (
      <div className="cart">
        Cart{" "}
        <sup>
          <strong>{this.props.cart}</strong>
        </sup>
      </div>
    );
  }
}

export default Cart;
