import React from "react";
import styles from "../pages_css/Cart.module.css";
import { useCartContext } from "../contexts/CartItemProvider";
import CartItem from "../components/CartItem";
import { useAuth } from "../contexts/AuthProvider";
import { Navigate, redirect, useLocation } from "react-router-dom";

export function loader(args, obj) {
  if (!obj.isLogin) {
    return redirect("/login?returnTo=/cart");
  }

  return null;
}

function Cart() {
  const { isLogin } = useAuth();
  const { cartList } = useCartContext();

  if (cartList.length == 0) {
    return <h1>No Items Found !!</h1>;
  }
  return (
    <div className={styles.classContainer}>
      {cartList && <CartItem cartList={cartList} />}
    </div>
  );
}

export default Cart;
