import React from "react";

const Products = ({ name, imagePath, updateItemCount }) => {
  const handleChange = (e) => {
    const currentValue = e.target.value;
    updateItemCount(name, currentValue);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:5000/${imagePath}`}
        alt={`${name} product`}
      />
      <form style={{ marginTop: "10px" }}>
        <label htmlFor={name} style={{ textAlign: "right" }}>
          {name}
        </label>
        <input
          id={name}
          style={{ marginLeft: 7 }}
          type="number"
          name="quantity"
          min="0" // 최솟값을 0으로 두자.
          defaultValue={0}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Products;
