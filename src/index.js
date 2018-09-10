import React from "react";
import ReactDOM from "react-dom";
import css from  './index.css';

const Index = () => {
  return <div className={css.container}>Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
