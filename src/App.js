import React, { Component } from "react";
import "./common.css";
import Cart from "./components/cart";
import ProductsGrid from "./components/productsGrid";
import FilterGrid from "./components/filterGrid";
import CartGrid from "./components/cartGrid";

class App extends Component {
  state = {
    products: PRODUCTS,
    category: "Women",
    sizeBy: "All",
    sizeValues: SIZE_VALUES,
    sortBy: 0, // featured
    sortValues: SORT_VALUES,
    cart: 0,
    cartProducts: []
  };

  sizeFilteringProductsArr = sizeBy => {
    let { sortBy } = this.state;
    let productsFiltered = [];
    if (sizeBy === "All") {
      productsFiltered = PRODUCTS;
    } else {
      productsFiltered = PRODUCTS.filter(a => {
        return a.size === sizeBy;
      });
    }
    this.sortProductsArr(sortBy, productsFiltered, sizeBy);
  };

  sizeByFilter = e => {
    this.sizeFilteringProductsArr(this.state.sizeValues[e.target.value]);
  };

  sortProductsArr = (sortBy, products, sizeBy) => {
    if (products == null) {
      // sort only
      products = this.state.products;
    }
    let productsSorted = [].concat(products).sort((a, b) => {
      switch (sortBy) {
        case 0: //featured
          return b.featured - a.featured;
        case 1: //price low-to-high
          return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
        case 2: //price high-to-low
          return parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1));
        case "default":
          return a.id - b.id;
      }
    });
    this.setState({ products: productsSorted, sortBy, sizeBy });
  };

  componentWillMount = function() {
    console.log("mounting..");
    this.sortProductsArr(this.state.sortBy); // initially sort by "featured"
  };
  componentWillUpdate = function() {
    console.log("updating..");
  };

  componentDidUpdate = function() {
    console.log("did update");
  };

  sortByFilter = e => {
    this.sortProductsArr(parseInt(e.target.value), this.state.products);
  };

  addProductToCart = productId => {
    let products = [...this.state.products];
    const product = this.findProduct(products, productId);
    product.qty = 1;
    product.isAddedToCart = true;
    this.setState({ products });
    this.setState(this.updatePrices(false, product, this.state.cartProducts));
  };

  deleteProductFromCart = productId => {
    let products = [...this.state.products];
    const product = this.findProduct(products, productId);
    product.isAddedToCart = false;
    const cartProducts = this.state.cartProducts.filter(p => p.id != productId);
    let cart = this.updateCartNumber(cartProducts);
    this.setState({ products });
    this.setState({ cart, cartProducts });
  };

  findProduct = (products, productId) => {
    const index = products.findIndex(p => p.id == productId);
    return products[index];
  };

  updateCartDetails = (productId, e) => {
    let cartProducts = [...this.state.cartProducts];
    const product = this.findProduct(cartProducts, productId);
    product.qty = parseInt(e.target.value);
    this.setState(this.updatePrices(true, product, cartProducts));
  };

  updatePrices = (isUpdate, prod, cartProducts) => {
    prod.subTotal = this.calSubTotalPrice(prod.price, prod.qty);
    if (!isUpdate) {
      cartProducts.push(prod);
    }
    let cart = this.updateCartNumber(cartProducts);
    return { cart: cart, cartProducts: cartProducts };
  };

  updateCartNumber = cartProducts => {
    return cartProducts.reduce(
      (total, element) => total + parseInt(element.qty),
      0
    );
  };

  calSubTotalPrice = (price, qty) => {
    price = qty * this.unformatPrice(price);
    return "$" + price.toFixed(2);
  };

  unformatPrice = price => {
    return parseFloat(price.slice(1));
  };

  render() {
    return (
      <div className="page">
        <h2 className="pageHeader">Shopping Cart</h2>
        <div>
          <Cart cart={this.state.cart} />
          <FilterGrid
            onSizeBy={this.sizeByFilter}
            sizeValues={this.state.sizeValues}
            onSortBy={this.sortByFilter}
            sortValues={this.state.sortValues}
          />
        </div>
        <div className="productAndCartGrid">
          <ProductsGrid
            products={this.state.products}
            onAddToCart={this.addProductToCart}
          />
          <CartGrid
            cartProducts={this.state.cartProducts}
            onDelete={this.deleteProductFromCart}
            onQtyChange={this.updateCartDetails}
          />
        </div>
      </div>
    );
  }
}

const SIZE_VALUES = [
  "All",
  "Women",
  "Juniors",
  "Plus",
  "Juniors Plus",
  "Maternity"
];
const SORT_VALUES = ["Featured", "Price-low to high", "Price-high to low"];
const PRODUCTS = [
  {
    id: 1,
    name: "Women's Long Sleeve Cardigan",
    category: "Women",
    size: "Women",
    price: "$15.99",
    featured: 48
  },
  {
    id: 2,
    name: "Women's Short Sleeve (Juniors)",
    category: "Women",
    size: "Juniors",
    price: "$7.99",
    featured: 4
  },
  {
    id: 3,
    name: "Women's Plus Size Cardigan",
    category: "Women",
    size: "Plus",
    price: "$12.99",
    featured: 8
  },
  {
    id: 4,
    name: "Women's Crew Neck Sweater (Juniors Plus)",
    category: "Women",
    size: "Juniors Plus",
    price: "$9.49",
    featured: 20
  },
  {
    id: 5,
    name: "Women's Long Sleeve",
    category: "Women",
    size: "Women",
    price: "$8.99",
    featured: 37
  },
  {
    id: 6,
    name: "Maternity Cozy Wrap Cardigan",
    category: "Women",
    size: "Maternity",
    price: "$10.99",
    featured: 2
  },
  {
    id: 7,
    name: "Maternity Striped Pullover",
    category: "Women",
    size: "Maternity",
    price: "$11.99",
    featured: 12
  },
  {
    id: 8,
    name: "Women's Plus Size Pullover",
    category: "Women",
    size: "Plus",
    price: "$10.49",
    featured: 39
  },
  {
    id: 9,
    name: "Women's Long Sleeve Hoodie",
    category: "Women",
    size: "Women",
    price: "$14.99",
    featured: 18
  }
];

export default App;
