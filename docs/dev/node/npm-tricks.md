# Node Package Manager

## Tips

### Change Python Version

`node-gyp` sometimes requires a different version of `python` than what is currently in your `$PATH`.

To set it on a case-by-case basis, pass the `--python` flag to `npm`, along with the `python` executable you'd like `npm` to use to build the package.

```bash
npm install --python=python2
```

To set it globally and permanently, run:

```bash
npm config set python python2
```

### Find Where Node is Installed

```bash
npm config get prefix

/Users/dani/.nvm/versions/node/v8.11.1
```

### List Globally Installed Packages

```bash
npm list -g --depth=0

├── chai@4.1.2
├── eslint@5.5.0
├── mocha@5.2.0
├── mongo@0.1.0
├── mongodb@3.1.4
├── node@10.10.0
└── nodemon@1.18.4
```

### Find Node `/bin`

```bash
npm bin -g

/Users/dani/.nvm/versions/node/v8.11.1/bin
```

## Packages of Note

### node-env-run

[Documentation](https://www.npmjs.com/package/node-env-run) A command-line tool that will load a `.env` file, initialize the values using dotenv, then execute your script. Requires no modification of code in order to add `.env` settings to a project.

```bash
npm install node-env-run --save --python=python2
```
