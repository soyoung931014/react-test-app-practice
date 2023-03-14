import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import ErrorBanner from "../../components/ErrorBanner";
import { OrderContext } from "../../contexts/OrderContext";

const CompletePage = ({ setStep }) => {
  const [OrderDatas] = useContext(OrderContext);
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // 데이터 가져오기
  useEffect(() => {
    orderCompleted(OrderDatas);
  }, [OrderDatas]);
  const orderCompleted = async (OrderDatas) => {
    try {
      let res = await axios.post("http://localhost:5000/order", OrderDatas);
      setOrderHistory(res.data);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  const orderTable = orderHistory.map((item) => {
    return (
      <tr key={item.orderNumber}>
        <td>{item.orderNumber}</td>
        <td>{item.price}</td>
      </tr>
    );
  });

  // 에러, 로딩
  if (error) {
    console.log(orderHistory);
    return <ErrorBanner message="에러가 발생했습니다." />;
  }
  if (loading) {
    return <div>loading</div>;
  } else {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>주문이 성공했습니다.</h2>
        <h3> 지금까지 모든 주문 </h3>
        <table style={{ margin: "auto" }}>
          <tbody>
            <tr>
              <th>주문 번호</th>
              <th>주문 가격</th>
            </tr>
            {orderTable}
          </tbody>
        </table>
        <button onClick={() => setStep(0)}>첫 페이지로</button>
      </div>
    );
  }
};

export default CompletePage;
