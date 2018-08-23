# Guide to Yarn

## Installation on Ubuntu

### Add Source and Install

```bash
$ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
$ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
$ sudo apt-get update && sudo apt-get install --no-install-recommends yarn
```

### Verify Installation

```bash
$ yarn --version
```

