import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Footer from "./Components/Footer.js";
import React, { useState } from "react";

function App() {
  let productList = [
    { price: 150000, name: "Iphone 10S Plus", quantity: 0 },
    { price: 120000, name: "Iphone 8", quantity: 0 },
    { price: 100000, name: "Iphone 7", quantity: 0 },
    { price: 80000, name: "Iphone 6S", quantity: 0 },
    { price: 60000, name: "Iphone 6", quantity: 0 },
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
    newProducts.splice(index, 1);
    newTotalAmount -= newProducts[index].quantity * newProducts[index].price;
    setProducts(newProducts);
    setTotalAmount(newTotalAmount);
  };

  return (
    <>
      <Navbar></Navbar>
      <main className="container mt-5">
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
