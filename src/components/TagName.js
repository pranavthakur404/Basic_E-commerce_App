import React from "react";

function TagName({ tname, data, setShowingData }) {
  function handleCLick() {
    if (tname == "All") {
      setShowingData(data);
    } else {
      let newItmes = [];
      newItmes = data.filter((li) => {
        return li.category == tname;
      });
      setShowingData(newItmes);
    }
  }
  return (
    <li
      style={{
        textTransform: "uppercase",
        listStyle: "none",
        borderBottom: "1px solid silver",
        padding: "5px",
        cursor: "pointer",
      }}
      onClick={handleCLick}
    >
      {tname}
    </li>
  );
}

export default TagName;
