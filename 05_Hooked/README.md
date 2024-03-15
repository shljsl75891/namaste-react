# Assignment

#### What are Javascript Modules ? Why we need it ?

- In early days of web development, JS was used just for a little bit of interactivity in web pages. There was not such a need to write many lines at that time, it started off as small programs.
- But now, we have complete web applications, with a lot of capabilties on modern browsers with a lot of javascript code, and javascript being used in other runtimes like deno, nodejs, bun etc.
- So, it makes a sense now to have a mechanism for writing such many lines of javascript in modular and organized way.
- Although, node.js had this mechanism for a long time. Addition to this, there are many tools which give this ability like commonjs, amd, requirejs, webpack, babel etc.
- and lately, modern browsers also started to support this kind of mechanism natively, of which Vite bundler also take advantage to avoid client side processing, as browser now itself can optimize loading of modules, making it more efficient than having to use a library for those extra round trips.
- This mechanism is uses import and export statements and called ES6 JS Module syntax.
- The codebase becomes reusable and easy to maintain with seperation of concerns.

**Some differences between standard javascript file and javascript module**
[mdn reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

- CORS security requirement by default.
- Strict mode on by default.
- No need of `defer` attribute, deferred by default.
- Have to use `type=module` with `<script>` tag to import JS module in HTML.
- Only executed once, regardless of number of `<script>` tags.
- Different scope called module than standard global scope, means module features aren't accessible in JS console unless explicitly attached to the global object like `window` in browser.

#### What is the difference between Named Export, Default export and \* as export?

- **Default export**: A Javascript module can have only 1 default export. Those are imported without usage of curly braces `{}`. No need to use `as` keyword to change the name. Those can be imported by any name.

```javascript
export default function printMessage() {} // library.js

import Func from "library.js";
```

- **Named export**: A Javascript module can have multiple named exports. Those need `{}` for importing (also for exporting at once) and `as` keyword for renaming the feature while exporting/importing.

```javascript
export const name = "Sahil Jassal"; // library.js
const message = "Hello World !!!";

export { message as MSG };

import { name as Name, MSG } from "library.js";
```

- **\* as export**: This is used to create module object. This will bind each and every exported feature to the module object.

```javascript
import * as Module from "./modules/module.js";

// Default export can be used using default
Module.default();

// All named exports can be used using their names
Module.function1();
Module.function2();
```

### What is the importance of `config.js` file ?

It keeps the all hard coded data seperate from the app. So that, we don't need to change that hard coded data in multiple places if needed. We can just change it `config.js`, and in all our codebase, it will gets automatically reflected.

### What are hooks in react ?

At the end of the day, hooks are also normal javascript functions with just `use` as prefix. Each hook given by react to us, has special meaning and purpose. Hooks let you use different React features from your components. For eg.

- `useState` and `useReducer` - for creating state variables in functional components
- `useEffect` and `useLayoutEffect` - for introducting sideeffects in app asynchronously and synchronously respectively
- `useRef` - for creating ref variables and refering the DOM elements.
- `useCallback` and `useMemo` - for perfomance optmization using memoization <br />
  and many more....

### Why do we need a useState Hook? [Reference](https://react.dev/reference/react/useState)

`useState` hook is used to create local state variables of functional component. State variables are not just normal javascript variables. They are super-energetic powerful readonly variables given by react to us. Unlike normal JS variables, React always constantly keep an eye on them, and as soon as they get updated, trigger the react's core reconcilliation fiber algortim, which re-renders the component as a whole, of which local state is updated, and React does all calculations and needed DOM manipulation, which keeps the UI and Data layer of app in sync.
