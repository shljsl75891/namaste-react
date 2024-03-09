# Assignment

### What is JSX ?

JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. It is not exactly HTML.

### Difference between React.createElement vs JSX

React Elements are the smallest building blocks of React apps. Unlike browser DOM elements, React elements are plain objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements. JSX behind the scenes is `React.createElement`. It is just a syntactical sugar as developers prefer the conciseness of JSX, and most codebases use it. Babel transpiles the modern JSX syntax to the version which React understands i.e. `React.createElement`.

### Benefits of JSX

- concise and easily readable syntax
- easy to write react elements with multiple children
- no need to learn new syntax for beginners who understands HTML.
- rendering logic and markup live together in the same place
- no need to make seperate files for structure and logic

### Behind the scenes of JSX

Babel transpiles the following JSX

```html
<h1 id="heading" role="heading">Hello, world!</h1>
```

to react elements

```javascript
/* #__PURE__*/ React.createElement(
  "h1",
  {
    id: "heading",
    role: "heading",
  },
  "Hello World!",
);
```

### Babel & parcel role in JSX

Parcel uses Babel behind the scenes to transpile the JSX to react elements. Parcel does a lot of things other than JSX transpilation.

### Components

There are two types of components in React:-

1. Class Based Components: at the end of the day, normal JS classes
1. Functional Components: at the end of the day, normal JS functions
1. Server Based Components: yet to explore

Composing components means calling another functional components in a functional component

### SuperPowers of JSX

```javascript
const title = "Namaste React";
const data = anyapicall();

// We can write any piece of JS code in JSX using {}
<h1>{title}</h1>;

// Any number of nesting
<ul className={active ? "" : "font-bold"}>
  <li>{data?.id}</li>
  <li>{data?.firstName}</li>
  <li>{data?.lastName}</li>
  <li>{data?.email}</li>
  <li>{data?.address}</li>
</ul>;
```
