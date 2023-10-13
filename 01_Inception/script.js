/*  
  <div id="parent"> 
    <div id="child_1">
      <h1>I'm h1 tag</h1>
      <h2>I'm h2 tag</h2>
    </div>
    <div id="child_2">
      <h1>I'm h1 tag</h1>
      <h2>I'm h2 tag</h2>
    </div>
  </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child_1" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child_2" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
]);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(parent);
