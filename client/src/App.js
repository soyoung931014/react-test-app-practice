import OrderPage from "./pages/OrderPage/OrderPage";
import { OrderContext, OrderContextProvider } from "./contexts/OrderContext";

function App() {
  return (
    <div style={{ padding: "4rem" }}>
      <OrderContextProvider>
        <OrderPage />
      </OrderContextProvider>
      {/*  <OrderContext.Provider>
      </OrderContext.Provider> */}
    </div>
  );
}

export default App;

// import { useState } from "react";
// import Type from "./pages/OrderPage/Type";
// import SummaryPage from "./pages/SummaryPage/SummaryPage";

// const [count, setCount] = useState(0);
// const [disabled, setDisabled] = useState(false);

{
  /* <div className="App">
<SummaryPage />
<Type />
<header className="App-header">
  <h3 data-testid="counter">{count}</h3>
  <div>
    <button
      data-testid="plus-button"
      onClick={() => setCount((count) => count + 1)}
      disabled={disabled}
    >
      +
    </button>
    <button
      data-testid="minus-button"
      onClick={() => setCount((count) => count - 1)}
      disabled={disabled}
    >
      -
    </button>
    <button
      data-testid="on/off-button"
      style={{ backgroundColor: "blue" }}
      onClick={() => setDisabled(!disabled)}
    >
      on/off
    </button>
  </div>
</header>
</div> */
}
