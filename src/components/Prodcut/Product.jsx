import React, { useState } from "react";

const Product = () => {
  const [count, setCount] = useState(0);
  function ChangeCount() {
    setCount(Math.ceil(Math.random()));
  }
  function increseCount() {
    setCount(count + 1);
  }
  function decrseCount() {
    setCount(count - 1);
  }
  return (
    <div className="container">
      <h1>Product Count</h1>
      <p className="btn-outline-primary mb-2 w-25">{count}</p>
      <button className="btn btn-info" onClick={ChangeCount}>
        Change
      </button>
      <div className="mt-2">
        <button className="btn btn-success w-25" onClick={increseCount}>
          +
        </button>
        <button className="btn btn-danger w-25" onClick={decrseCount}>
          -
        </button>
      </div>
    </div>
  );
};

export default Product;
