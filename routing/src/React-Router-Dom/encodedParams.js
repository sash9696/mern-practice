import React from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

const products = [
  { id: "1", name: "Iphone" },
  { id: "2", name: "Sneakers" },
  { id: "3", name: "Grocery" },
  { id: "4", name: "Table" },
];

function HomePage() {
  return <h2>Home Page</h2>;
}

function ProductList() {
  return (
    <div>
      <h2>ProductList</h2>
      <ul>
        {products.map((product) => {

          const encodedId = btoa(product.id);

          return (
            <li key={encodedId}>
              <Link to={`/product/${encodedId}`}>{product.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ProductDetail() {
  const { id } = useParams();

  const decodedId = atob(id);

  const product = products.find((p) => p.id === decodedId);

  console.log("product", product);

  if (!product) return <h3>Product not found</h3>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Product ID: {product.id}</p>
      <Link to="/products">BAck to products</Link>
    </div>
  );
}

function App() {
  return (
    <div style={{ margin: "100px" }}>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> | <Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="*" element={<h2>404 - Not Found</h2>} />
      </Routes>
    </div>
  );
}

export default App;
