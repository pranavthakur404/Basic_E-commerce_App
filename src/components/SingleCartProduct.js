import React from "react";
import styles from "../component_css/SingleCartProduct.module.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import { useCartContext } from "../contexts/CartItemProvider";

function SingleCartProduct({
  thumbnail,
  id,
  discountPercentage,
  category,
  title,
  price,
  quantity,
}) {
  const { increaseQuantity, decreaseQuantity, deleteItem } = useCartContext();
  function handlePlus() {
    increaseQuantity(id);
  }
  function handleMinus() {
    decreaseQuantity(id);
  }

  function handleDel() {
    deleteItem(id);
  }

  return (
    <div className={styles.singleCart}>
      <img src={thumbnail} alt={title} />
      <span className={styles.title}>
        {title} <br />
        {category}
      </span>
      <span className={styles.price}>₹ {quantity * price}</span>
      <div
        style={{
          display: "flex",
        }}
      >
        <button onClick={handleMinus}>
          <FaMinus />
        </button>
        <p className={styles.quantity}>{quantity}</p>
        <button onClick={handlePlus}>
          <FaPlus />
        </button>
      </div>
      <button onClick={handleDel} className={styles.deleteBtn}>
        <AiTwotoneDelete />
      </button>
    </div>
  );
}

export default SingleCartProduct;
