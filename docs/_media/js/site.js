window.$docsify = {
  name: "docs@droxey",
  repo: "https://github.com/droxey/docs",
  homepage: "home.md",
  logo: "_media/droxey-blue.png",
  // themeColor: "#678594",
  el: "#app",
  maxLevel: 3,
  subMaxLevel: 6,
  coverPage: false,
  onlyCover: false,
  notFoundPage: true,
  loadSidebar: false,
  auto2top: true,
  autoHeader: true,
  noEmoji: false,
  executeScript: true,
  externalLinkTarget: "_blank",
  nameLink: 'https://droxey.com/docs/',
  search: {
    maxAge: 86400000,
    paths: "auto",
    placeholder: "Type to search...",
    noData: "No Results!",
    depth: 3
  },
  themeable: {
    readyTransition: true,
    responsiveTables: true
  },
  pagination: {
    previousText: ":arrow_left: Previous",
    nextText: "Next :arrow_right:"
  },
  // routerMode: "history",
  ga: "UA-111535249-1"
};

window.onload = function() {
  if (typeof navigator.serviceWorker !== "undefined") {
    navigator.serviceWorker.register("sw.js");
  }

  setTimeout(function() {
    baffle("#main h1 a.anchor span")
      .start()
      .set({ speed: 90 })
      .text(currentText => currentText)
      .reveal(500, 1500);
  }, 250);

  var isDeployed = window.document.location.href.indexOf("droxey.com") !== -1;
  if (isDeployed) {
    window.$docsify = {
      basePath: "https://droxey.com/docs/"
    };
  }
};
