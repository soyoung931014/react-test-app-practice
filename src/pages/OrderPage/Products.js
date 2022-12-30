import React from "react";

const Products = ({ name, imagePath }) => {
  return (
    <div style={{ ttextAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:5000/${imagePath}`}
        alt={`${name} product`}
      />
      <form style={{ marginTop: "10px" }}>
        <label style={{ textAlign: "right" }}>{name}</label>
        <input
          style={{ marginLeft: 7 }}
          type="number"
          name="quantity"
          min="0" // 최솟값을 0으로 두자.
          defaultValue={0}
        />
      </form>
    </div>
  );
};

export default Products;
