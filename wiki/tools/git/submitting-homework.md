# Submitting Homework on GitHub

## Prerequisites

1.  Sign up for an account on GitHub. Choose your username wisely! You'll be professionally associated with this account.
1.  Set up Git on your local machine according to [this guide](https://github.com/outputs-io/dataviz-docs/blob/master/git/README.md).

## Step by Step

**‼️ IMPORTANT: $ denotes a command that must be entered into Terminal/Git Bash.**

1.  In your browser, create a new repo on GitHub: [Create a New Repository](https://github.com/new).

    * Give it a sensible name and descripition.
    * Leave the rest of the settings as default, unless you know what you're doing!

1.  In `Terminal.app` or `Git Bash`, navigate to the directory in which you store all your repos.

    In class, we configured it to `~/dev/repos`.

    ```bash
    $ cd ~/dev/repos
    ```

1.  Clone the repository to your `~/dev/repos` directory:

    ```bash
    $ git clone git@github.com:droxey/my-homework-assignment.git
    ```

1.  Open the repository:

    ```bash
    $ cd my-homework-assignment && open .
    ```

1.  If you are **beginning your assignment**, create any required files and folders in this directory, then **commit and push your progress incrementally** to take advantage of the version control features Git provides.

    **If you've already completed your assignment** before reading this guide, simply **move your completed assignment files to the newly opened window**.

1.  In `Terminal.app` or `Git Bash`, add, commit, and push your files to your new GitHub repository:

    ```bash
    $ git add .
    $ git commit -m "Assignment #1 solution."
    $ git push origin master
    ```

1.  In your browser, refresh your GitHub repository page to verify your `git push`.

1.  Make sure to include this repository URL when submitting your assignment. The TAs will use the files and code you provide in this repository in order to grade your homework and give feedback.
