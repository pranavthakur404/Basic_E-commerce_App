import axios from "axios";
import React, { useState } from "react";
import { Navigate, redirect, useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import styles from "../pages_css/Home.module.css";
import Container from "../components/Container";
import ProductCategory from "../components/ProductCategory";

export async function loader(args, obj) {
  if (!obj.isLogin) {
    return redirect("/login?returnTo=/");
  }
  try {
    const res = await axios.get("https://dummyjson.com/products");
    const data = res.data.products;
    return data;
  } catch (error) {
    return null;
  }
}

function Home() {
  const data = useLoaderData();

  // getting all unique tags
  let gettingTags = new Set();
  data.forEach((li) => {
    gettingTags.add(li.category);
  });
  let tags = Array.from(gettingTags);

  // define data to display on home page
  const [showingData, setShowingData] = useState(data);

  return (
    <div className={styles.mainBody}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.productLists}>
            {showingData &&
              showingData.map((li) => {
                return <Card {...li} key={li.id} />;
              })}
          </div>
          <div className={styles.productCategory}>
            <ProductCategory
              data={data}
              setShowingData={setShowingData}
              tags={tags}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
