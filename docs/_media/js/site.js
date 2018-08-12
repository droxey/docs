window.$docsify = {
  name: "docs@droxey",
  homepage: "home.md",
  repo: "https://github.com/droxey/docs",
  logo: "_media/droxey-blue.png",
  themeColor: "#678594",
  el: "#app",
  maxLevel: 5,
  subMaxLevel: 1,
  coverPage: false,
  onlyCover: false,
  notFoundPage: true,
  loadNavbar: false,
  auto2top: true,
  autoHeader: true,
  noEmoji: false,
  allowExternals: true,
  search: {
    maxAge: 86400000,
    paths: "auto",
    placeholder: "Type to search…",
    noData: "No Results!",
    depth: 4
  },
  themeable: {
    readyTransition: true,
    responsiveTables: true
  },
  routerMode: "hash",
  ga: "UA-111535249-1",
  plugins: [
    function(hook, vm) {
      hook.beforeEach(function(html) {
        var url =
          "https://github.com/droxey/docs/tree/master/docs" +
          vm.router.getFile();
        var editHtml = "[Edit](" + url + " ':target=_blank')\n";
        return (
          "<button class='btn-edit-on-github'><i class='fas fa-fw fa-lg fa-pen-square'></i>" +
          editHtml +
          "</button>" +
          html
        );
      });
    }
  ]
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
