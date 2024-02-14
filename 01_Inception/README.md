# Assignment

### What is Emmet ?

Emmet is web toolkit to improve HTML and CSS workflow of developers. We can type CSS-like expressions using CSS Selectors that can be dynamically parsed, and produce output depending on what you type in the abbreviation.

### Difference between Library and Framework ?

Both frameworks and libraries are code written by someone else to make developers lives easier. The technical difference between a framework and library lies in a term called [inversion of control](https://en.wikipedia.org/wiki/Inversion_of_control).<br /> When we use a library, we are in charge of the flow of the application. we are choosing when and where to call the library. When we use a framework, the framework is in charge of the flow. It provides some places for you to plug in your code, but it calls the code you plugged in as needed.

### What is CDN ? Why we use it ?

A content delivery network (CDN) is a network of interconnected servers that speeds up webpage loading for data-heavy applications.

- A CDN improves efficiency by introducing intermediary servers between the client and the website server. These CDN servers manage some of the client-server communications.
- They decrease web traffic to the web server, reduce bandwidth consumption, and improve the user experience of your applications.
- When a user visits a website, data from that website's server has to travel across the internet to reach the user's computer. If the user is located far from that server, it will take a long time to load a large file, such as a video or website image. Instead, the website content is stored on CDN servers geographically closer to the users and reaches their computers much faster.

### Why is React known as React ?

It is because it is meant to quickly react to changes in data without reloadig the whole page. This name
reflects its quick reflective nature.

### What is cross-origin in `<script>` tag ?

The `cross-origin` attribute provides support for CORS, defining how the element handles cross-origin requests.
The default value is `anonymous`

- `anonymous`:
    - Request uses CORS headers and credentials flag is set to 'same-origin'.
    - There is no exchange of user credentials via cookies, client-side TLS certificates or HTTP authentication, unless destination is the same origin.

- `use-credentials`
    - Request uses CORS headers, credentials flag is set to 'include' and user credentials are always included.

### What is the difference between `react.development.js` and `react.production.js` CDN links?

Development build:
- It is for development reasons. It has source maps, warnings, helpful error
messages and additional debugging tools and often times hot reloading ability in those builds.
- It has larger bundle size and may negatively impact the performance of an app

Production build:
- It is meant for deploying your application in a production environment.
- It excludes development-specific tools, warnings, and error messages which is good for security reasons.
- It is smaller in file size, which improves the performance of your application.

# What are async and defer attribute in `<script>` ?
`normal`:
- In this case, the html is parsed line by line until `script` tag.
- If the script is external, a fetch GET request is made for it.
- The script after being fetched is executed before parsing is resumed.

<br />

`async`:
- The script fetching happens parallely with HTML parsing.
- After script is being fetched, the HTML parsing is paused till its execution
- Then, the HTML parsing is resumed.

<br />

`defer`
- The script fetching happens parallely with HTML parsing.
- It is not executed until HTML parsing is going on.
- After the HTML parsing is completed, the script is executed



