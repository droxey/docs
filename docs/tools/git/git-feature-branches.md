<!-- TITLE: Git Workflow: Feature Branches -->
<!-- SUBTITLE: How to use feature branches to collaborate via git. -->

# Git Workflow: Feature Branches

### Successful teams follow 3 easy rules to integrate git into their daily workflow:
  1. **Commit early and often.**
  1. **Don't break master.** The code in `origin/master` always works. No errors, no UI glitches. No exceptions.
  1. **Use feature branches.** One branch per feature.


This document describes a sample development workflow using a feature branch containing all the front-end tests for our project. This branch will be called frontend-tests, but no one has created it yet.



## Command Overview

```
➜ cd ~/dev/repos/r3view
➜ git pull origin master
➜ git checkout -b frontend-tests master
➜ git add .
➜ git commit -m "added nightmarejs to package.json"
➜ git pull origin master
➜ git push origin frontend-tests
```

## Step by Step
`[Note: run all commands that begin with ➜!]`


### Step 1
On your **local** machine, `cd` to the project directory. In git, this is known as your **working directory**, which was created when you executed git clone at the beginning of the project.

```
dani@mbp:~
➜ cd ~/dev/repos/r3view
```

### Step 2
Update your **local** repository with the latest revision of `origin/master`.

```
dani@mbp:dev/repos/r3view on master [$!]
➜ git pull origin master

remote: Counting objects: 6, done.
remote: Total 6 (delta 2), reused 2 (delta 2), pack-reused 4
Unpacking objects: 100% (6/6), done.
From ssh://github.com/droxey/r3view
branch            master     -> FETCH_HEAD
383e9d7..7766d57  master     -> origin/master
Updating 383e9d7..7766d57
Fast-forward
README.md | 25 ++++++++++++++++++-------
1 file changed, 18 insertions(+), 7 deletions(-)
```


### Step 3
Now that your **local** `master` branch is up-to-date with your team's latest changes, create a branch locally by __running the exact command__ below. There are other ways to do this, but __this one is foolproof__. This syntax creates a new branch named `frontend-tests` based on an existing branch, `master`.

```
dani@mbp:dev/repos/r3view on master [$!]
➜ git checkout -b frontend-tests master
```


### Step 4
Code that feature!


### Step 5
Stage and commit your changeset to your **local** branch. Write clear, consise commit messages. This information is invaluable to your coworkers, teammates, not to mention yourself – six months from now.

```
dani@mbp:dev/repos/r3view on frontend-tests [$+]
➜ git add .


dani@mbp:dev/repos/r3view on frontend-tests [$+]
➜ git commit -m "added nightmarejs to package.json"

[frontend-tests ebfe4a6] added nightmarejs to package.json
 8 files changed, 9 insertions(+), 8 deletions(-)
 ```

### Step 6
Integrate upstream changes from `origin/master`, which adds them to our **local** branch.

```
dani@mbp:dev/repos/r3view on frontend-tests [$+]
➜ git pull origin master

From ssh://github.com/droxey/r3view
 * branch            master     -> FETCH_HEAD
Already up-to-date.
```

### Step 7
Push your new branch, as well as your changeset, to `origin/frontend-tests`.

```
dani@mbp:dev/repos/r3view on frontend-tests
➜ git push origin `frontend-tests`

Counting objects: 16, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (16/16), done.
Writing objects: 100% (16/16), 1.49 KiB | 1.49 MiB/s, done.
Total 16 (delta 14), reused 0 (delta 0)
remote: Resolving deltas: 100% (14/14), completed with 14 local objects.
To ssh://github.com/droxey/r3view.git
[new branch]      `frontend-tests` -> `frontend-tests`
```

This branch is now available on your `origin` – simply open up GitHub, GitLab, or Heroku to verify! When complete, ask your team lead to review your code and merge it to the `master` branch.


## IMPORTANT!
_Repeat this process each time you finish a part of the feature or need to take a break. Feature branches are considered works in progress – so commit and push to your feature branches as much as possible; even if it's not done! If something goes terribly wrong, origin/frontend-tests serves as a history, backup, and record of your valuable work!_
