import React from "react";
import styles from "../component_css/Card.module.css";
import { BsCartCheckFill } from "react-icons/bs";
import { useCartContext } from "../contexts/CartItemProvider";
import { Link } from "react-router-dom";

function Card({ id, title, price, discountPercentage, category, thumbnail }) {
  const { addItem, cartList } = useCartContext();

  function handleClick() {
    for (let item of cartList) {
      if (id == item.id) {
        alert("Item already added");
        return null;
      }
    }

    const newItem = {
      thumbnail: thumbnail,
      id: id,
      title: title,
      price: price,
      quantity: 1,
      discountPercentage: discountPercentage,
      category: category,
    };
    addItem(newItem);
    // alert("Item added Successfully")
  }

  return (
    <>
      <div className={styles.card}>
        <img src={thumbnail} alt={title} />
        <div className={styles.productMeta}>
          <Link to={`products/${id}`}>
            <h3>{title}</h3>
          </Link>

          <h4>
            ₹ {price}
            {" - "}
            <span className={styles.discountPer}>
              {discountPercentage}% off
            </span>
          </h4>
          <button onClick={handleClick} className={styles.button}>
            <BsCartCheckFill /> Add To Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
