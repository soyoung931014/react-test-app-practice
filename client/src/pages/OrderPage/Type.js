import React, { useContext, useEffect, useState } from "react";
import Products from "./Products";
import axios from "axios";
import ErrorBanner from "../../components/ErrorBanner";
import Options from "./Options";
import { OrderContext } from "../../contexts/OrderContext";

const Type = ({ orderType }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [orderDatas, updateItemCount] = useContext(OrderContext);
  // OrderContext.js의  return [{ ...orderCounts, totals }, updateItemCount]; 을 구조분해
  useEffect(() => {
    loadItems(orderType);
  }, [orderType]);
  const loadItems = async (orderType) => {
    try {
      let response = await axios.get(`http://localhost:5000/${orderType}`);
      setItems(response.data);
    } catch (error) {
      setError(true);
    }
  };
  if (error) {
    return <ErrorBanner message="에러가 발생했습니다" />;
  }
  const ItemComonents = orderType === "products" ? Products : Options;
  const optionItems = items.map((item) => (
    <ItemComonents
      style={{ border: "2px solid red" }}
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      updateItemCount={(itemName, newItemCount) =>
        updateItemCount(itemName, newItemCount, orderType)
      }
    />
  ));
  console.log(optionItems, "optionItems");
  return (
    <div>
      <h2>주문종류</h2>
      <p>하나의 가격</p>
      <p>총 가격: {orderDatas.totals[orderType]} </p>
      <div
        style={{
          display: "flex",
          flexDirection: orderType === "options" && "column", //
        }}
      >
        {optionItems}
      </div>
    </div>
  );
};

export default Type;
