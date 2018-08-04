<!-- TITLE: Helpful Dokku Commands -->
<!-- SUBTITLE: Tips and Tricks for Dokku -->

# Dokku Commands

## Example Deployment

### Configure Host

```bash
$ dokku apps:create ruby-rails-sample
$ sudo dokku plugin:install https://github.com/dokku/dokku-postgres.git
$ dokku postgres:create rails-database
$ dokku postgres:link rails-database ruby-rails-sample
```

### Configure Local Repository

```bash
$ git clone git@github.com:heroku/ruby-rails-sample.git && cd ruby-rails-sample
$ git remote add dokku ssh://dokku@lab.outputs.io:9922/ruby-rails-sample
```

### Deploy

```bash
$ git push dokku master
```

## Skip Deployment

```bash
$ dokku config:set ruby-rails-sample DOKKU_SKIP_DEPLOY=true
```

## Re-Deployment

```bash
dokku ps:rebuild ruby-rails-sample
```
