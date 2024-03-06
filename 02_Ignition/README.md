# Assignment

### What is NPM ?

`npm` !== `node package manager`. <br />
`npm` is the world's largest software registry. It is a package manager for javascript packages. Developers from every continent use npm to share and borrow packages

### What is Parcel/Webpack ? Why do we need it ?

These all are known as bundlers. The primary job of them is bundle-up multiple html, css and javascript files into single bundled file. They can do a lot of things which together is responsible for large production-ready scalable web applications.

### What is `.parcel-cache` ?

The `.parcel-cache` stores information about project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It is used by parcel for faster rebuilds for faster development time.

### What is `npx` ?

It is used to run any command from a local or remote `npm` package.

### What is difference between `dependencies` and `devDependencies` ?

`dependencies` are essential for apps to run and required in both development and production environments. Where as, `devDependencies` are not required for app to run. It is required while development only. For example, `typescript`, any bundler, `jest` etc. are needed while development only, so they must be in `devDependencies`.

### What is Tree-Shaking ?

Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code. It relies on the `import` and `export` statements to detect if code modules are exported and imported for use between JavaScript files. **This is important for preparing code that is production ready, for example with clean structures and minimal file size.**

### What is Hot Module Replacement (HMR) ?

_Hot Module Replacement (HMR)_ improves the development experience by automatically updating modules in the browser at runtime without needing a whole page refresh. This means that application state can be retained as you change small things.

### What is `.gitignore` and What should we put in it ?

`gitignore` is a special feature that allows you to specify what files should be ignored while pushing files in remote repository. Anything that can be regenerated easily in any environment must be put in it.

### What is the difference between `package.json` and `package-lock.json` ?

`package.json`: It is a configuration file for npm to tell about dependencies, peerDependencies and devDependencies, named scripts for easily running commands, meta-data about the npm package, github repository, author's name, LICENSE etc.

`package-lock.json`: It is a mirror of `node_modules` dependency tree of transitive dependencies with the exact versions of all packages mentioned in `package.json`.

### Why should we not modify `package-lock.json` ?

To ensure consistency, integrity of all transitive dependencies and reproducibility across different environments, we shouldn't modify it.

### What is `node_modules` folder? Is it a good idea to push it on git remote repositories ?

`node_modules` folder contains all dependencies, devDependencies and transitive dependencies that our application needs to run properly. We shouldn't put that on remote repositories, as that is the heaviest thing in the universe and can easily be regenerated using `package-lock.json` on any environment.

### What is `dist` folder?

It contains all type of builds generated from `PARCEL` that is hosted on `localhost` while development or on server in `production` environment.

### What is `browserslist` ?

`browserslist` is a configuration file that determines which targets different versions browsers your project should support.

### What is caret `^` and tilde `~` in `package.json` ?

`Major.Minor.Patch` -> npm packages versioning <hr />
`~ caret`: “Approximately equivalent to version”, will update you to all future patch versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0.

`^ tilde`: “Compatible with version”, will update you to all future minor/patch versions, without incrementing the major version. ^1.2.3 will use releases from 1.2.3 to <2.0.0.

### What are types of `<script>` in html ?

The `type` attribute in the `<script>` tag is used to specify the scripting language used within the script element. It helps the browser understand how to interpret and execute the code inside the script.

- **Omitted or empty string or JS MIME type:** indicates that the script is a "classic script" containing JavaScript code. It's the default behavior

```html
<script>
  // or <script type="text/javascript">
  // Javascript code
</script>
```

- **`importMap`**: indicates that the body of the `<script>` element contains an import map _*(a JSON object that developers can use to control how the browser resolves module specifiers when importing JavaScript modules)*_.

```html
<script>
  {
     "imports": {
       "module-name": "/path/to/module.js"
     }
   }
</script>
```

- **`module`**: indicates that the code within the `<script>` element is treated as a JavaScript module, which are also better for organization and encapsulation of code.

  - Module scripts have deferred processing, and the `charset` and `defer` attributes have no effect on them.
  - Module scripts also require the use of the CORS protocol for cross-origin fetching.

```html
<script type="module">
  /**
   * we can use import and export for making organizational,
   * modular and encapsulation of code using importMap
   */
</script>
```

- **`speculationrules`**: indicates that the body of the `<script>` element contains speculation rules. Speculation rules _*(a JSON object, determine what resources should be prefetched or prerendered by the browser.)*_

```html
<script type="speculationrules">
  {
    "rules": {
      "prefetch": ["/path/to/resource"]
    }
  }
</script>
```

- **Any other value**: the embedded content is treated as a data block. In this case, the content won't be processed by the browser as JavaScript. Developers must use a valid MIME type that is not a JavaScript MIME type to denote data blocks. All other attributes, including src, will be ignored.

```html
<script type="application/json">
  {
    "data": "Some data block"
  }
</script>
```
