<!-- TITLE: Git Flow 101 -->
<!-- SUBTITLE: Everything you need to get started with Git Flow on macOS. -->

# Flowing with Git

## Introduction

Gitflow is an alternative code management strategy popularized by Vincent Driessen at nvie. Read more about this popular branching model, designed around the project release cycle, in this [Gitflow Workflow tutorial](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) presented by Atlassian.

## Setup

### macOS

1. Install `git-flow` via Homebrew ([source](https://github.com/nvie/gitflow/wiki/Mac-OS-X)):

   ```bash
   brew install git-flow
   ```

2. Open a new Terminal window.

3. Type `git flow` in the new Terminal window. If successfully installed, you'll receive the following output:

   ```bash
   usage: git flow <subcommand>

   Available subcommands are:
      init      Initialize a new git repo with support for the branching model.
      feature   Manage your feature branches.
      release   Manage your release branches.
      hotfix    Manage your hotfix branches.
      support   Manage your support branches.
      version   Shows version information.

   Try 'git flow <subcommand> help' for details.
   ```

### Windows

Follow the **Cygwin** instructions located [here](https://github.com/nvie/gitflow/wiki/Windows#cygwin).

### Linux

Follow the installation instructions located [here](https://github.com/nvie/gitflow/wiki/Linux) for your Linux distro of choice.
