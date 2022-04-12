import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Footer from "./Components/Footer.js";
import React, { useState } from "react";
import Additem from "./Components/Additem.js";

function App() {
  let productList = [
    { price: 150000, name: "Iphone 10S Plus", quantity: 0 },
    { price: 120000, name: "Iphone 8", quantity: 0 },
    { price: 100000, name: "Iphone 7", quantity: 0 },
  ];
  let [products, setProducts] = useState(productList);
  let [totalAmount, setTotalAmount] = useState(0);

  const increamentQuantity = (index) => {
    let newProducts = [...products];
    let newTotalAmount = totalAmount;
    newProducts[index].quantity++;
    newTotalAmount += newProducts[index].price;
    setProducts(newProducts);
    setTotalAmount(newTotalAmount);
  };

  const decreamentQuantity = (index) => {
    let newProducts = [...products];
    let newTotalAmount = totalAmount;
    if (newProducts[index].quantity > 0) {
      newProducts[index].quantity--;
      newTotalAmount -= newProducts[index].price;
    }
    setProducts(newProducts);
    setTotalAmount(newTotalAmount);
  };

  const resetQuantity = () => {
    let newProducts = [...products];
    let newTotalAmount = 0;
    newProducts.map((product) => {
      product.quantity = 0;
    });
    setProducts(newProducts);
    setTotalAmount(newTotalAmount);
  };

  const removeItem = (index) => {
    let newProducts = [...products];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProducts[index].quantity * newProducts[index].price;
    newProducts.splice(index, 1);
    setProducts(newProducts);
    setTotalAmount(newTotalAmount);
  };
  const addItem = (name, price) => {
    let newProducts = [...products];
    newProducts.push({
      name: name,
      price: price,
      quantity: 0,
    });
    setProducts(newProducts);
  };
  return (
    <>
      <Navbar noOfProducts={products.length}></Navbar>
      <main className="container mt-5">
        <Additem addItem={addItem}></Additem>
        <ProductList
          productList={products}
          increamentQuantity={increamentQuantity}
          decreamentQuantity={decreamentQuantity}
          removeItem={removeItem}
        ></ProductList>
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}></Footer>
    </>
  );
}

export default App;
