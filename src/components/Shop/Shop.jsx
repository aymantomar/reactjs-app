import axios from "axios";
import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "./style.css";
export default function Product() {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState(0);
  const [loading, setLoading] = useState(false);
  async function getMovies() {
    setLoading(true);
    let { data } = await axios.get("https://fakestoreapi.com/products");
    setProduct(data);
    setLoading(false);
    // console.log(data);
  }

  function handelCard() {
    setCart(cart + 1);
    console.log(cart);
  }
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "green",
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="container aboutMargin" style={{ marginTop: "120px" }}>
      <div className="row">
        {loading === true ? (
          <ClipLoader
            color={"#000"}
            loading={loading}
            cssOverride={override}
            size={80}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          product.map((item) => (
            <div className="col-md-3 d-flex align-items-stretch" key={item.id}>
              <div className="card mb-3">
                <img
                  className="card-img-top img-fluid"
                  src={item.image}
                  alt={item.title}
                  style={{ height: "180px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description.slice(0, 100)}</p>
                </div>
                <div className="d-flex my-2 mx-2">
                  <button onClick={handelCard} className="btn btn-primary w-75">
                    <i class="fa-solid fa-cart-shopping"></i> Add to Card
                  </button>
                  <div className=" p-1 h6 text-success w-25 text-end">
                    <span className="text-decoration-line-through text-danger d-block">
                      200 $
                    </span>
                    {item.price}$
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
