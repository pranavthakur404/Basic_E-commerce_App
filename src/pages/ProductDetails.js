import React from "react";
import styles from "../component_css/ProductDetails.module.css";
import Container from "../components/Container";
import axios from "axios";
import { redirect, useLoaderData } from "react-router-dom";
import { useCartContext } from "../contexts/CartItemProvider";

export async function loader(args, obj) {
  const id = args.params.id;
  if (!obj.isLogin) {
    return redirect(`/login?returnTo=/products/${id}`);
  }
  try {
    const res = await axios.get(`https://dummyjson.com/products/${id}`);
    const data = res.data;
    return { productDetails: data };
  } catch (error) {
    return null;
  }
}

function ProductDetails() {
  const { productDetails } = useLoaderData();
  const { addItem, cartList } = useCartContext();

  function handleCLick() {
    for (let item of cartList) {
      if (item.id == productDetails.id) {
        alert("Item Already Added");
        return null;
      }
    }
    const newList = {
      id: productDetails.id,
      title: productDetails.title,
      price: productDetails.price,
      thumbnail: productDetails.thumbnail,
      quantity: 1,
    };
    addItem(newList);
  }
  return (
    <>
      <Container>
        <div className={styles.wrapper}>
          <img src={productDetails.thumbnail} alt="" />
          <div className={styles.metaDetails}>
            <h3>{productDetails.title}</h3>
            <h3 className={styles.pricing}>
              ₹{productDetails.price} - {productDetails.discountPercentage}% off
            </h3>
            <p>{productDetails.description}</p>
            <p>
              <b>Rating:</b> {productDetails.rating}/5
            </p>
            <button onClick={handleCLick}>Add to Cart</button>
          </div>
        </div>

        <div className={styles.moreImages}>
          <h4>More Images: </h4>
          {productDetails.images &&
            productDetails.images.map((thumb) => {
              return <img src={thumb} alt="More likely Images" />;
            })}
        </div>
      </Container>
    </>
  );
}

export default ProductDetails;
