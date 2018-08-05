// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

const dotenv = require("dotenv");
dotenv.config();

const users = [
  //   {
  //     caption: "me",
  //     // You will need to prepend the image path with your baseUrl
  //     // if it is not '/', like: '/test-site/img/docusaurus.svg'.
  //     image: "img/safari-pinned-tab.svg",
  //     infoLink: "https://www.droxey.com",
  //     pinned: true
  //   }
];

const siteConfig = {
  title: "@droxey/docs" /* title for your website */,
  tagline: "",
  url: "https://droxey.github.io" /* your website url */,
  baseUrl: "/docs/" /* base url for your project */,
  projectName: "docs",
  organizationName: "droxey",
  noIndex: false,

  // If you have users set above, you add it here:
  users,

  headerIcon: "img/droxey-blue.png",
  footerIcon: "img/droxey.png",
  favicon: "img/favicon/favicon.ico",

  colors: {
    primaryColor: "#6a8494",
    secondaryColor: "#2C3D47"
  },

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  copyright:
    "[ © " + new Date().getFullYear() + " ⸺ written with ♥ by @droxey ]",

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: "default"
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: [
    "https://buttons.github.io/buttons.js",
    "https://cdn.jsdelivr.net/algoliasearch/3/algoliasearch.min.js"
  ],

  stylesheets: [],

  markdownPlugins: [
    function foo(md) {
      md.renderer.rules.fence_custom.foo = function(
        tokens,
        idx,
        options,
        env,
        instance
      ) {
        return '<div class="foo">bar</div>';
      };
    }
  ],

  algolia: {
    apiKey: "85999c609db15b43dee1cdabe9da3cfa",
    appId: "V1WJ7O74WH",
    indexName: "github"
  },

  cleanUrl: true,
  onPageNav: "separate",

  twitter: true,
  twitterUsername: "droxey",
  twitterImage: "img/droxey.png",
  ogImage: "img/droxey.png",

  editUrl: "https://github.com/droxey/docs/edit/master/docs/",
  disableTitleTagline: true,
  gaTrackingId: "UA-111535249-1",

  scrollToTop: true,
  scrollToTopOptions: {
    zIndex: 100
  },

  headerLinks: [
    { doc: "index", label: "Docs" },
    { blog: true, label: "Blog" },
    { search: true }
  ]

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
