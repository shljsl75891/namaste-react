import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import "./style.css";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<AppLayout />);
