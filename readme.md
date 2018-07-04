# Dootstrap (beta) - A minimalist SCSS grid

A super lean SCSS grid based on the 12-column philosphy of Bootstrap. This is a work-in-progress SCSS framework I use on my own projects.

## Getting Started

Clone the repository in to the /public folder of your project (or where ever you store your front end assets).
Run `npm install` then `gulp watch` to compile your SCSS and JS files. Run `gulp` for final production compiling. To copy over any NPM dependencies into the front end JS folder, run `gulp js-modules` - for CSS dependencies run `gulp css-modules`. This library makes heavy use of `flexbox`.

## Authors

* **Temparc Web (Philip James de Vries)** - [Temparc](https://temparcweb.com)

## License

This project is licensed under the MIT License

## Features

- HTML5 skeleton with header and footer
- JS-driven mobile menu (requires jQuery)
- Minimal SCSS Grid for responsive sites
- Section-based layout
- Gallery/lightbox support out of the box
- Reponsive image loading based on screen pixel ratio (add `data img`, `data-img-lg`, `data-img-sm` HTML attributes to images you want to load via JS this way)

## Software/Dependencies

- NPM
- Gulp.js
- jQuery
- FeatherLight.js

## Upcoming Improvements

- add a CSS masonry layout for gallery thumbnails