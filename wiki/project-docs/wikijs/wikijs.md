<!-- TITLE: Wiki.js -->
<!-- SUBTITLE: Tips and Tricks -->

# Self Hosted Wiki.js Configuration

## Installation

Install and configure Wiki.js in three commands:

```bash
$ mkdir /srv/wikijs && cd /srv/wikijs
$ curl -sSo- https://wiki.js.org/install.sh | bash
$ node wiki configure
```

## Run at Startup

Install the `pm2` npm package to run Wiki.js at startup. Then, navigate to `/srv/wikijs` to save the startup entry.

```bash
$ npm install -g pm2
$ cd /srv/wiki
$ pm2 save
```

## Git Submodules: Include External Documentation

1. Add the git submodule:

    ```bash
    $ git submodule add git@github.com:username/repo.git local/path/for/submodule
    ```

1. Add the following alias to your shell:

    ```bash
    alias updateall="git pull origin master && git submodule update --init --recursive && git submodule foreach --recursive git fetch && git submodule foreach git pull --ff-only origin master"
    ```

1. Run `updateall`.

1. Restart the wiki: `pm2 restart wiki`

## Serve images via `nginx`

1. Collect all the images from your documentation, and copy them to `repo/uploads`, preserving directory structure:

    ```bash
    $ cd /srv/wikijs/repo
    $ tar cf - $(find . -type f -exec file {} \; | awk -F: '{if ($2 ~/image/) print $1}') | (cd uploads; tar xf -)
    ```

1. Add the following block to your `nginx` configuration to serve images from `repo/uploads`:

    ```nginx
    location ~* \.(gif|jpe?g|png|pdf|ico)$ {
    		root /srv/wikijs/repo;
    		try_files $uri $uri/ /uploads/$uri;
    }
    ```

1. Reload `nginx`:
    ```bash
    $ service nginx reload
    ```

## View Logs

```bash
$ pm2 logs wiki
```

## View Wiki.js Process Status

```bash
$ pm2 status wiki
```
