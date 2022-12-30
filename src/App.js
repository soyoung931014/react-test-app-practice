import { useState } from "react";
import SummaryPage from "./pages/SummaryPage/SummaryPage";

function App() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="App">
      <SummaryPage />
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
    </div>
  );
}

export default App;
