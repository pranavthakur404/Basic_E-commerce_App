import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthProvider from "./contexts/AuthProvider";
import CartItemProvider from "./contexts/CartItemProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartItemProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </CartItemProvider>
);
