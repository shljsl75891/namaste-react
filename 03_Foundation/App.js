import React from "react";
import ReactDOM from "react-dom/client";

const mainContainer = document.getElementById("root");

const container = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "Heading1"),
  React.createElement("h2", {}, "Heading2"),
  React.createElement("h3", {}, "Heading3"),
]);

const root = ReactDOM.createRoot(mainContainer);

root.render(container);
