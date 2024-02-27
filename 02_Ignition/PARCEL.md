# Some Superpowers of PARCEL

### Parcel is Such a Beast

- Making development build
- Hosting devbuild on a server
- HMR -> Hot Module Replacement
- File Watching Algroithm - written in C++
- Caching - Faster Subsequent builds
- Image Optimization
- Minification of code
- Bundling HTML, CSS and JavaScript
- Compression for optimal size
- Consistent Hashing
- Code Splitting
- Differential Bundling -> to support older versions of browsers
- Tree-Shaking -> removal of dead unused code
- Beautiful Errors Handling using Diagnostic Tools
- Ways to host the app on HTTP and HTTPS
- Different dev and production builds

1. **Code-Splitting:** This allows you to split your application code into separate bundles which can be loaded on demand, which means smaller initial bundle sizes and faster load times.

1. **Differential-Bundling:** Parcel automatically produces a `<script type="module">` with modern JavaScript syntax, as well as a fallback `<script nomodule>` for older browsers when necessary. This reduces bundle sizes for a majority of users by avoiding transpilation of features like classes, arrow-functions, async/await, and more. This uses `browserslist` behind the scenes.

1. **Consistent-Hashing**: ParcelJS utilizes a consistent hashing algorithm to generate unique filenames for cache busting. This ensures that whenever you make changes to your code, the browser fetches the latest version from the server, eliminating the need for users to manually clear their browser cache.

1. **Image-Optimization**: ParcelJS not only handles JavaScript and CSS but also takes care of optimizing images. It includes an image transformer out of the box. It automatically compresses and optimizes images during the build process, reducing their size without compromising quality, resulting in faster loading times.

1. **File-Watching Algroithm**: ParcelJS employs a highly efficient file-watching algorithm written in C++, which ensures lightning-fast recompilation of changed files. This algorithm minimizes the time required for rebuilding the project, making development even more efficient.

1. **Minification**: ParcelJS excels at bundling JavaScript, CSS, and other assets. It automatically analyzes your project’s dependencies and generates optimized bundles. It can handle a wide range of file types out of the box, making it extremely versatile.

1. **Transformation**: ParcelJS includes built-in code cleaning and transformation capabilities. It leverages tools like Babel and PostCSS to automatically transform your code to ensure compatibility with different browsers and optimize its performance.

1. **Seperate Builds**: ParcelJS streamlines the development process by providing a development server with live reloading and HMR capabilities. When it comes to production builds, ParcelJS generates optimized, minified, and tree-shaken bundles, ready for deployment to production servers.

1. **Caching**: ParcelJS intelligently caches compiled assets during development, significantly reducing build times for subsequent builds. This caching mechanism ensures that only the modified files are recompiled, resulting in faster feedback loops during development.

1. **Compression**: ParcelJS supports gzip compression, reducing the file sizes served to the browser and improving the overall performance.

1. **HTTPS Support**: ParcelJS provides flexibility by allowing you to specify a custom port number for the development server. Additionally, it supports gzip compression, reducing the file sizes served to the browser and improving the overall performance.
