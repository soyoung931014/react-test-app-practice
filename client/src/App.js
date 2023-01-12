import OrderPage from "./pages/OrderPage/OrderPage";
import SummaryPage from "./pages/SummaryPage/SummaryPage";
import CompletePage from "./pages/CompletePage/CompletePage";
import { OrderContextProvider } from "./contexts/OrderContext";
import { useState } from "react";
function App() {
  const [step, setStep] = useState(0);
  return (
    <div style={{ padding: "4rem" }}>
      <OrderContextProvider>
        {step === 0 && <OrderPage setStep={setStep} />}
        {step === 1 && <SummaryPage setStep={setStep} />}
        {step === 2 && <CompletePage setStep={setStep} />}
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
