const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/joshdudley/Websites/caleb-dudley-portfolio/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/joshdudley/Websites/caleb-dudley-portfolio/src/pages/about.js"))),
  "component---src-pages-analog-js": hot(preferDefault(require("/Users/joshdudley/Websites/caleb-dudley-portfolio/src/pages/analog.js"))),
  "component---src-pages-archive-digital-js": hot(preferDefault(require("/Users/joshdudley/Websites/caleb-dudley-portfolio/src/pages/archive-digital.js"))),
  "component---src-pages-archive-js": hot(preferDefault(require("/Users/joshdudley/Websites/caleb-dudley-portfolio/src/pages/archive.js"))),
  "component---src-pages-digital-js": hot(preferDefault(require("/Users/joshdudley/Websites/caleb-dudley-portfolio/src/pages/digital.js"))),
  "component---src-pages-fine-art-js": hot(preferDefault(require("/Users/joshdudley/Websites/caleb-dudley-portfolio/src/pages/fine-art.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/joshdudley/Websites/caleb-dudley-portfolio/src/pages/index.js"))),
  "component---src-pages-video-js": hot(preferDefault(require("/Users/joshdudley/Websites/caleb-dudley-portfolio/src/pages/video.js")))
}

