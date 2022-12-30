import React from "react";

const ErrorBanner = ({ message }) => {
  let errorMessage = message || "에러입니다.";
  return (
    <div data-testId="error-banner" style={{ backgroundColor: "red" }}>
      {errorMessage}
    </div>
  );
};

export default ErrorBanner;
