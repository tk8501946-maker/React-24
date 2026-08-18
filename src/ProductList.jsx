import React from "react";
import "./ProductList.css";

function ProductList() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 55000,
      category: "Electronics",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 25000,
      category: "Electronics",
    },
    {
      id: 3,
      name: "Headphones",
      price: 2500,
      category: "Accessories",
    },
    {
      id: 4,
      name: "Keyboard",
      price: 1500,
      category: "Accessories",
    },
  ];

  return (
    <div className="product-page">
      <div className="product-container">

        <h1 className="product-title">
          Product List
        </h1>

        <div className="product-grid">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card"
            >
              <div className="product-icon">
                <span>🛍️</span>
              </div>

              <h2>{product.name}</h2>

              <p className="category">
                {product.category}
              </p>

              <p className="price">
                ₹{product.price}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default ProductList;