import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

async function fetchProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
}

function HomePage() {
  return <h2>Home Page</h2>;
}

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.log("Error fetching products", error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);


  if(loading) return <h2>Loading products</h2>

  return (
    <div>
      <h2>ProductList</h2>
      <ul>
        {products?.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProductDetail() {
  const {id} = useParams();

  const [product, setProduct]  = useState(null);
  const [loading, setLoading]  = useState(true);

  useEffect(() => {
    async function loadingProduct(){

      try {

        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        console.log('response',response)
        const productData = await response.json();
        setProduct(productData);
        
      } catch (error) {
          console.error('Error fetching product:', error)
      }finally{
        setLoading(false);
      }

    }


    loadingProduct();
  } , [id])


  console.log("product", { product,id });

  if (loading) return <h3>Loading product</h3>;

  if (!product) return <h3>Product not found</h3>;

  return (
    <div>
      <h2>{product.title}</h2>
      <p>Product ID: {product.id}</p>
      <p>{product.description}</p>

      <img src={product.image} alt={product.title}  style={{width:'200px'}} />

      <p>Price: ${product.price}</p>
      <Link to="/products">BAck to producrs</Link>
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
