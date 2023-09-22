import React from "react";

export default function Cart({ cartProducts }) {
  // Initialize total to 0
  let total = 0;

  // Check if cartProducts is an array before mapping
  if (Array.isArray(cartProducts) && cartProducts.length > 0) {
    // Calculate the total price
    cartProducts.forEach((product) => {
      total += product.item.cost * product.quantity;
    });
  }

  return (
    <div>
      <div className="container row" style={{ margin: "auto" }}>
        {Array.isArray(cartProducts) && cartProducts.length > 0 ? (
          cartProducts.map((product) => (
            <div className="m-2 col-5" key={product.item.id}>
              <div className="card">
                <img
                  className="card-img-top"
                  style={{ height: "200px", width: "300px", margin: "auto" }}
                  src={product.item.pic}
                  alt={product.item.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.item.name}</h5>
                  <h2>Price: Rs.{product.item.cost}</h2>
                  <div className="btn-group">
                    <button className="btn btn-primary" role="button">
                      -
                    </button>
                    <button className="btn btn-primary" role="button">
                      {product.quantity}
                    </button>
                    <button className="btn btn-primary" role="button">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No items in the cart.</p>
        )}
      </div>
      <div className="jumbotron">
        <h1 className="display-4">Total Price: Rs.{total}</h1>
        <a className="btn btn-primary" role="button">
          Make Payment
        </a>
      </div>
    </div>
  );
}
