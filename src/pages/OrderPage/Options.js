import React from "react";

const Options = ({ name }) => {
  return (
    <form>
      <input type="checkbox" id={``} /> // 한 칸 띄우기
      <label htmlFor={`${name} option`}>{name}</label>
    </form>
  );
};

export default Options;
