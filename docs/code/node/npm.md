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

## Packages of Note

### node-env-run

[Documentation](https://www.npmjs.com/package/node-env-run) A command-line tool that will load a `.env` file, initialize the values using dotenv, then execute your script. Requires no modification of code in order to add `.env` settings to a project.

```bash
npm install node-env-run --save --python=python2
```

