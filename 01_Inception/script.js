const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React !",
);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(heading);
