import React, { Component } from "react";
import Child from "../Child/Child";

export default class Parent extends Component {
  state = {
    product: [
      {
        id: 20,
        count: 15,
        price: 2000,
        code: "samsung C3",
        onSale: true,
        category: "Tv",
      },
      {
        id: 21,
        count: 25,
        price: 2500,
        code: "samsung C4",
        onSale: false,
        category: "Tv",
      },
      {
        id: 22,
        count: 17,
        price: 2800,
        code: "samsung C5",
        onSale: true,
        category: "Tv",
      },
      {
        id: 23,
        count: 10,
        price: 3000,
        code: "samsung C6",
        onSale: true,
        category: "Tv",
      },
      {
        id: 24,
        count: 8,
        price: 3500,
        code: "samsung C7",
        onSale: false,
        category: "Tv",
      },
    ],
  };
  deleteProduct = (productId) => {
    let myProduct = [...this.state.product];
    myProduct = myProduct.filter((prodcutItem) => prodcutItem.id !== productId);
    this.setState({ product: myProduct });
  };
  render() {
    return (
      <div className="container">
        <h3>Parent</h3>
        <div className="row g-3">
          {this.state.product.map((productItem, index) => (
            <Child
              productDetails={productItem}
              deleteItem={this.deleteProduct}
              key={index}
            />
          ))}
        </div>
      </div>
    );
  }
}
