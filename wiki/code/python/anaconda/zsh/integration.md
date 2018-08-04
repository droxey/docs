# conda + zsh + oh-my-zsh integration

## Purpose

On macOS and Linux, Anaconda defaults to inserting required PATH variables in `~/.bash_profile`.

## Intended Audience

* You have changed your default shell from `bash` to `zsh`.
* You are running macOS or Linux.
* You receive this error after installing Anaconda and running `conda --version`: `
  ```bash
  $ conda --version
  zsh: command not found: conda
  ```

## The Fix

1. Open `~/.zshrc` in your editor of choice.
1. Scroll to the bottom of the file.
1. Paste this line at the bottom: `export PATH=$HOME/anaconda3/bin:$PATH` and save.
1. Run `source ~/.zshrc` in your Terminal.
1. `conda --version` should now return the running Anaconda version:
  ```bash
  $ conda --version
  conda 4.4.8
  ```

## Plugins

In the same folder as this README, an Anaconda oh-my-zsh plugin is available. Ensure you have oh-my-zsh installed, then follow these steps to add the custom conda plugin:

1. In Terminal, paste `cd $HOME/.oh-my-zsh/custom/plugins && mkdir conda && cd conda`.
   NOTE: An error that says: `cd: no such file or directory: ~/.oh-my-zsh/custom/plugins` may indicate that you need to create this directory first.
1. Add `conda_auto_env.sh` and `conda.plugin.zsh` files to the new `conda` directory.
1. Edit `~/.zshrc`. Add `conda` to the list of plugins, then save.
1. Run `source ~/.zshrc` (or restart Terminal) for the change to take affect.
1. You now have access to a few convienence commands to administrate your Anaconda environments: `workon`, `workoff`, `rmvirtualenv`, and `cdvirtualenv`!
