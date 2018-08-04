#  Helpful Anaconda Commands

> All commands assume a developer-selected environment name of `MyPythonProject`.
> It is recommended that one changes this value, replacing `MyPythonProject` with a name of a suitable match to the intended use of the environment.

## Create an Environment

```bash
conda create -n MyPythonProject python=3.6 anaconda
```

## Activate an Environment

```bash
source activate MyPythonProject
```

## Remove an Environment

```bash
conda remove --name MyPythonProject --all
```
