import React, { useEffect } from "react";
import styles from "../component_css/ProductCategory.module.css";
import TagName from "./TagName";

function ProductCategory({ tags, setShowingData, data }) {
  tags.unshift("All");
  return (
    <div className={styles.container}>
      <h3>PRODUCT CATEGORIES</h3>
      <div className={styles.categoryList}>
        <ul>
          {tags.map((name) => {
            return (
              <TagName
                data={data}
                setShowingData={setShowingData}
                tname={name}
                key={crypto.randomUUID()}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProductCategory;
