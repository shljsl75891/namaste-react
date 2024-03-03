import React from "react";
import ReactDOM from "react-dom/client";

const mainContainer = document.getElementById("root");

/*
const container = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "Heading1"),
  React.createElement("h2", {}, "Heading2"),
  React.createElement("h3", {}, "Heading3"),
]); */

const container = (
  <div className="title">
    <h1>Heading1</h1>
    <h2>Heading2</h2>
    <h3>Heading3</h3>
  </div>
);

const root = ReactDOM.createRoot(mainContainer);

root.render(container);
