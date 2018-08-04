<!-- TITLE: pipenv -->
<!-- SUBTITLE: Common Commands -->

# Useful Commands for pipenv

## Basic Commands

### Create Environment

```bash
$ pipenv install
```

### Activate Environment

```bash
$ pipenv shell
```

### Install Packages

```bash
$ pipenv install Flask=='0.11.*'
```

### Deactivate Environment

```bash
$ exit
```

### Uninstall Packages

```bash
$ pipenv uninstall Flask'
```

### Uninstall All Packages

```bash
$ pipenv uninstall --all
```

### Delete Environment

```bash
$ pipenv --rm
```

## Advanced Usage

### Store Environment Inside Project Directory

```bash
$ export PIPENV_VENV_IN_PROJECT=1
$ pipenv install
```

### Install from requirements.txt File

```bash
$ pipenv install -r requirements.txt
```

### View Dependency Graph

```bash
$ pipenv Graph
```
