<!-- TITLE: Karma Step by Step -->
<!-- SUBTITLE: Mocha and Karma installation guide. -->

Follow these instructions to get `mocha` and `karma` running on your machine!

## Instructions

1. Run `npm i -g karma-cli` in Terminal. Only have to do this once per computer!
2. In Terminal, cd to the directory that contains your node project
3. Run `npm i -D karma karma-chrome-launcher karma-commonjs karma-browserify browserify watchify mocha chai karma-mocha-reporter` in your Terminal.
	-   `karma-chrome-launcher` allows us to launch a test report in Chrome.
	-   `karma-mocha` allows us to run our tests with Mocha.
	-   `karma-browserify` allows us to use `browserify` and `watchify`. Browserify allows us to use Node's `require` in scripts we run in the browser.
	-   Note that we need local installations of `mocha` and `chai` for our tests to run properly.
	-   Finally, `karma-mocha-reporter` prints test results to the command-line, just like Mocha.
4. Create a new Karma configuration file by running `karma init` and choosing the following settings:
	-   Tab to `mocha` for the testing framework.
	-   Tab to `no` when prompted about RequireJS.
	-   Select `Chrome` when prompted to capture browsers automatically. Don't add other browsers.
	-   Add `src/*.js` and `test/*.js` as the locations for your source and test files.
	-   Enter nothing when prompted about exclusions.
	-   Select `yes` when prompted about Karma's watching files and running tests on change.
	-   This creates a file called `karma.conf.js`.
5. Finally, we need to make a few manual changes to our new `karma.conf.js` file. Open it in your editor and make the following changes:
	-   Find the section that says `frameworks` and add `"browserify"`.
	-   Find the section that says `preprocessors` and add a key that reads `'test/*.js'` whose value is `["browserify"]`.
	-   Find the section that says `reporters` and add `"mocha"` behind `"progress"`.
6. Save the file.
7. Add at least one test in your `/test/` directory.
8. Run `karma start` to launch Karma and run your tests! Karma will watch for any changes in your source code and test files. Awesome!
