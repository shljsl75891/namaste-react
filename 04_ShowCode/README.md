![image](https://github.com/shljsl75891/namaste-react/assets/56100355/12567afa-b771-42c6-a24a-47a643626869)

# Assignment

### Is JSX mandatory for React?

No, `JSX` is different from React. It is just a syntax extension of Javascript to write markup in `.js` or `.jsx` file. React only needs React elements for its core algorithum for efficient manipulation of doms, and ReactDOM needs the same to render them on Browser DOM. `JSX` is behind the scenes, react elements which are transpiled by Babel or ESBuild.

### Is ES6 mandatory for React?

ES6 stands for ECMAScript 6.

ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015. It has some new features such as:

- Classes
- Arrow Functions
- Variables (let, const, var)
- Array Methods like .map()
- Destructuring
- Modules
- Ternary Operator
- Spread Operator

No, `ES6` is not manadatory for React. In older react version, we can also use `create-react-class` for class based components.

```javascript
var createReactClass = require("create-react-class");
var Greeting = createReactClass({
  render: function () {
    return <h1>Hello, {this.props.name}</h1>;
  },
});
```

And, now, functional components are just javascript functions. We can use arrow functions `() => <></>` as well as normal functions `function(){return <></>;}` for that with the return type as React elements.

#### `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX

- **`{TitleComponent}`:** means putting javascript variable's value in JSX.
- **`{<TitleComponent />}`:** means invoking javascript functions in JSX which also returns JSX. This is usually called react components composition.
- **`{<TitleComponent></TitleComponent>}`:** same as above, just it is easier to wrap multiple children in this way of invoking functional components.

### How can I write comments in JSX?

We can write comments in JSX using Javascript multiline comments by wrapping them in curly braces `{}`

```javascript
function Greeting() {
    return (
        { /* Heading 1*/ }
        <h1>Hello World!</h1>;
    );
}
```

#### What is `<React.Fragment></React.Fragment>` and `<></>` ?

`<React.Fragment>`, often used via `<></>` syntax, lets you group elements without a wrapper node. It is used to assign/return multiple react elements.

```javascript
function Greeting() {
  return (
    {/* <Fragment> if we need to pass any key*/}
    <>
      {/* Heading 1*/}
      <h1>Hello World!</h1>
      {/* Heading 2*/}
      <h2>Hello World!</h2>
    </>
  );
}
```

### What is Virtual DOM in React?

- In React world, the term “virtual DOM” is usually associated with React elements since they are the objects representing the user interface. React, however, also uses internal objects called “fibers” to hold additional information about the component tree. They may also be considered a part of “virtual DOM” implementation in React.
- Manipulating the Browser DOM is expensive, so React manipulate the virtal DOM on its end, then finally, render the all changes after huge faster calculations on browser DOM. This saves us from a huge performance hit.
- Thinking of your app as a tree is useful for understanding the relationship between components. This understanding will help you debug future concepts like performance and state management.

### What is Reconciliation ?

The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process of finding out the difference between actual DOM and virtual DOM is called reconciliation. In Modern React, virtual DOM is considered as [Render Trees](https://react.dev/learn/understanding-your-ui-as-a-tree)

### What is React Fiber ?

Fiber is the new reconciliation engine in React 16. Its main goal is to enable incremental rendering of the virtual DOM. [Read more](https://github.com/acdlite/react-fiber-architecture)

- asynchronous as compared to older reconciler `STACK` which is synchronous
- the ability to split rendering work into chunks and spread it out over multiple frames.
- the ability to pause, abort, or reuse work as new updates come in
- the ability to assign priority to different types of updates and more...

### Why we need keys in React? When do we need keys in React? [Reference](https://react.dev/learn/rendering-lists)

- When rendering an dynamic array of items on DOM, we need `key` - _*(a string or a number that uniquely identifies it among other items in that array)*_ in React for efficient DOM manipulation.

- Rules of keys

  1. Keys must be unique among siblings. However, it’s okay to use the same keys for JSX nodes in different arrays.
  1. Keys must not change or that defeats their purpose! Don’t generate them while rendering.

- These are too important if array's items could be changed, (inserted, deleted, sorting etc...), as a well-chosen key helps React infer what exactly has happened, and make the correct updates to the DOM tree in lowest effort. It is recommended to rather than generating keys on the fly, we should include them in our data.

- If the array items changes, while manipulation, react will know exactly which item is deleted or where the new item is being added. So, while reconciliation, react just need to compare the keys with older items and only changed items are re-rendered on DOM, rather than all items.

### Can we use index as keys in React? [Reference](https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/)

- A well-chosen key provides more information than the position within the array. Even if the position changes due to reordering, the key lets React identify the item throughout its lifetime.
- Using indexes as keys has no advantages, as if order of items changes, or a new item is added, or an item is deleted, all react nodes's indices also change which violates the 2nd rule of keys in react.

### What are props in React?

React props are just properties that are given to React component to send dynamic data to react components. As functional components are normal javascript functions, props is also a fancy terms for sending arguments to normal functions.

### What is a Config Driven UI ?

In Configuration-driven UI, also known as config-driven UI or configuration-based UI:

- We can build our UI, according to different configurations based on different places. It will be based on data coming from Backend API. Some places would have different preferences, so, the look of website will be driven by configuration sent by the API. For eg. in Swiggy API, we need to send latitudes and longtitudes, and the data, and image CDNs are sent according to that.

- The layout, styles, and other properties of UI elements are defined in a configuration file or database, which can be easily modified without requiring changes to the codebase. This approach makes it easier to customize the UI for different use cases or user groups, without the need for extensive coding.

- The configuration file or database may also define the data sources and the data to be displayed in the UI, as well as the interactions and behavior of the UI components. This allows for greater flexibility and adaptability of the UI to different use cases, as the configuration data can be easily modified or replaced without affecting the underlying application logic

## **Why React is so fast ? in my own words** [Reference](https://react.dev/learn/preserving-and-resetting-state)

- React is fast because of its core efficient and performant diff. algortithm - React Fiber
- React creates a virtual dom of whole HTML dom in memory, because finding out the difference between two HTML doms and manipulating it in the browser on the go is very heavy and inefficient. So, react creates a virtual DOM of fiber nodes made up of react elements (normal JS objects) in memory, which is representation of actual DOM of html nodes which the browser paints.
- Then, on every interaction on UI, React triggers its core algortithm by the help of setState dispatch actions, after which react creates a new copy of VDOM, and do all manipulations on it. Then, compares the new virtual dom with previous virtual dom and then only, ReactDOM changes that final difference in the required part of actual HTML DOM using native DOM Manipulation Web APIs, which can easily be repainted by browser performantly.
- React use `type` as string for html elements and functions for react components in its render tree. Using this, react understands which is reusable and which needs to change.
- React makes sure, that it needs to touch the HTML DOM as less as it can and do all manipulations on virtual dom before-hand and then, only re-render the actual dom. Thus, it keeps the UI layer and data layer in sync smoothly.
