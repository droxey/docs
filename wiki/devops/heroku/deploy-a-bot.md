# Deployment Guide: Heroku Bots

## Purpose

This guide provides a simple to follow, **step by step process** that focuses on:

* **Deploying bots**, written in **Python**
* on **[Heroku](https://www.heroku.com/)**
* **without exposing** any **secrets** (_example: API keys_)
* using only the **command line** via [heroku-cli](https://devcenter.heroku.com/articles/heroku-cli#download-and-install).

## Step by Step Guide

1.  **Fork** [this repository](https://github.com/outputs-io/heroku-bot) to get started.

    ![fork.png](images/fork.png)

1.  GitHub will redirect you to your new fork. Click the green `Clone or download` button to retreive the **SSH url** of your freshly forked repository. Select the address, and copy it to your clipboard.

    ![clone.png](images/clone.png)

1.  **Open Terminal**, **navigate** to the directory you store your code, and **clone** your new repository to your local machine.

    _Example_:

    ```bash
    cd ~/dev/repos
    git clone git@github.com:droxey/heroku-bot.git
    ```

1.  **Install requirements** from `requirements.txt`:

    ```bash
    cd heroku-bot
    source activate PythonData
    pip install -r requirements.txt
    ```

1)  **Create Heroku App**

    Run `heroku apps:create` to create a new Heroku application, replacing `name-for-app-here` with a name of your choosing:

    ```bash
    heroku apps:create name-for-app-here
    ```

1)  **Add Environment Variables**

    Next, we need to **keep our secret data safe**. API keys, database passwords, and other credentials should **never** be committed to git, nor pushed to GitHub.

    Inform Heroku of our keys by running `heroku config:set` for each API Key, password, etc:

    ```bash
    heroku config:set CONSUMER_KEY=1ziaVCudxqnGg2aZ7iFPBDqA6
    heroku config:set CONSUMER_SECRET=pP8eXXtKDSjaQGGOxmMgoeTIySKJlkIoUJ6fnxQt89N3Uw5ziQ
    heroku config:set ACCESS_TOKEN=981737227536379905-2mZsUFZM6I6w6PZlNzBIIPDR57TU3P6
    heroku config:set ACCESS_TOKEN_SECRET=7GKRu3AyQZzmvRWqCmCoXVuv9QnMEdRwUrhVfV1W3hXFB
    ```

    Then store the keys in a special `.env` file by running `heroku config:get KEY_NAME -s >> .env` for each secret value you'd like to store:

    ```bash
    heroku config:get CONSUMER_KEY -s  >> .env
    heroku config:get CONSUMER_SECRET -s  >> .env
    heroku config:get ACCESS_TOKEN -s  >> .env
    heroku config:get ACCESS_TOKEN_SECRET -s  >> .env
    ```

    Don't worry, `.env` is already in `.gitignore` --- this means secrets are only visible to you, and to Heroku upon deployment!

1)  **Implement Bot**: open `ChatterBot.py` in your favorite editor, and write your code. Don't forget to test!

1)  **Commit Your Changes Incrementally**

    **_Great developers commit early and often!_**

    Be sure to `add` and `commit` your changes to your local git repository **each time** you reach a milestone, fix a bug, or need to take a break.

    ```bash
    git add .
    git commit -m "[fix] typo in quote on line 28."
    ```

1)  **Push Your Changes to GitHub**

    Ready to take your changes live? Awesome!

    Let's double check you've committed all your changes by running the following command:

    ```bash
    git status
    ```

    If `git status` returns a list of files, `add`, `commit`, then run `git status` again.

    If `git status` returns `nothing to commit, working tree clean`, excellent! You're ready to push your changes to GitHub:

    ```bash
    git push origin master
    ```

1)  **Deploy to Heroku**

    Finally, run the below commands to **deploy** your application to Heroku.

    ```bash
    git push heroku master
    heroku ps:scale worker=1
    ```

    _**Protip**: be sure to **read the output**. This will come in handy if you run into any errors!_

1)  **_Congratulations!_** You've just successfully deployed your application! Show the world!
