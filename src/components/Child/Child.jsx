import React, { Component } from "react";

export default class Child extends Component {
  render() {
    // console.log(this.props);
    let { category, code, count, id, price, onSale } =
      this.props.productDetails;
    return (
      <div className="col-md-3">
        <div className="bg-info p-2 position-relative">
          <h3>id : {id}</h3>
          <h3>Code : {code}</h3>
          <h3>category : {category}</h3>
          <h3>count : {count}</h3>
          <h3>price : {price}</h3>
          {onSale ? (
            <div className="bg-danger position-absolute top-0 end-0 p-2 text-white">
              OnSale
            </div>
          ) : null}
          <button
            className="btn btn-danger"
            onClick={() => this.props.deleteItem(id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
