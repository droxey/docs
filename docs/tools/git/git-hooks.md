# Git - Defining a Hook

## Hook Creation

1. Navigate in the Terminal to the desired repository.

1. Create the hook. In this example, we create a local `post-merge` git hook that will run every time we execute `git pull` from this repository:

    ```bash
    nano .git/hooks/post-merge
    ```

1. Paste the following code, uncomment one of the hook types (`Post-Merge` or `Post-Receive`), and update as required:

    ```bash
    #!/usr/bin/env bash

    # Post-Merge Hooks:
    # changed_files="$(git diff-tree -r --name-only --no-commit-id ORIG_HEAD HEAD)"

    # Post-Receive Hooks:
    # changed_files="$(git diff --name-only HEAD^ HEAD)"

    check_run() { echo "$changed_files" | grep --quiet "$1" && eval "$2" }

    # Example usage: used to run `npm install` if package.json changed.
    # check_run package.json "npm install"
    ```

1. Make the file executable:

    ```bash
    chmod +x .git/hooks/post-merge
    ```
