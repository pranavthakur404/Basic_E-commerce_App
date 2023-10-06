import React from "react";
import SingleCartProduct from "./SingleCartProduct";

function CartItem({ cartList }) {
  return (
    <div>
      {cartList.map((product) => {
        return <SingleCartProduct key={product.id} {...product} />;
      })}
    </div>
  );
}

export default CartItem;
