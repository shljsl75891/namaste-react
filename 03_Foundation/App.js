import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const mainContainer = document.getElementById("root");

/*
const container = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "Heading1"),
  React.createElement("h2", {}, "Heading2"),
  React.createElement("h3", {}, "Heading3"),
]); */

/* const container = (
  <div className="title">
    <h1>Heading1</h1>
    <h2>Heading2</h2>
    <h3>Heading3</h3>
  </div>
); */

/* const Greeting = () => {
  return <p>Hello, world!</p>;
};

const Container = () => (
  <div className="title">
    <h1>Heading1</h1>
    <h2>Heading2</h2>
    <h3>Heading3</h3>
    {Greeting()}
    <Greeting />
    <Greeting></Greeting>
  </div>
); */

const Header = () => (
  <div className="header-component">
    <img
      className="header-logo"
      src="https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124"
      alt="header-logo"
    />
    <input type="text" className="search-bar" placeholder="Search anything" />
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      className="account-dp"
    />
  </div>
);

const root = ReactDOM.createRoot(mainContainer);

root.render(<Header />);
