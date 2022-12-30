import React, { useEffect, useState } from "react";
import Products from "./Products";
import axios from "axios";

const Type = ({ orderType }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    loadItems(orderType);
  }, [orderType]);
  const loadItems = async (orderType) => {
    try {
      let response = await axios.get(`http://localhost:5000/${orderType}`);
      setItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const ItemComonents = orderType === "products" ? Products : null;
  const optionItems = items.map((item) => (
    <ItemComonents
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));
  return <div>{optionItems}</div>;
};

export default Type;
