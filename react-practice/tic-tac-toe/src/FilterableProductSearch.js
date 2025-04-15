import React, { useState } from "react";
import "./App.css";

import { PRODUCTS } from "./constants";
//
import SearchBar from "./components/SearchBar/SearchBar";

// search bar
//checkbox to show only stocked products
//dispaly table with name and price
//category => data

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
}

function ProductRow({ product }) {
  return (
    <tr>
      <td
        style={{
          color: product.stocked ? "black" : "red",
        }}
      >
        {product.name}
      </td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products, searchText, inStock }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    // if(product.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1){
    //   return;
    // }

    const nameMatches = product.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    if (!nameMatches) {
      return;
    }

    if (inStock && !product.stocked) {
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category} />);
    }

    rows.push(<ProductRow product={product} />);

    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>{" "}
        {/* table rows */}
      </thead>

      <tbody>{rows}</tbody>
    </table>
  );
}

function FilterableProductTable({ products }) {
  const [searchText, setSearchText] = useState("");
  const [inStock, setInStock] = useState(false);

  return (
    <div>
      {/* Search bar */}
      <SearchBar
        searchText={searchText}
        onSearchTextChange={setSearchText}
        inStock={inStock}
        onInStockChange={setInStock}
      />
      {/* product table */}

      <ProductTable
        products={products}
        searchText={searchText}
        inStock={inStock}
      />
    </div>
  );
}

function App() {
  return (
    <div>
      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
}

export default App;
