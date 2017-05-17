# GWDA-407 Final Project
## Description
Created using meteor-create app

## Members
* Jared Nutt
* Jenny
* Tommy Sherman
* Vonetta Stevenson
* Lauren

## Basic Instructions
1. All pull requests are done through Jared (DarthOstrich)
2. Each person is required to create their own forks of Jared's repo
3. All communication will be done through Slack Channel or Trello
4. Be excellent to each other

## Overview of Project
Create an app that allows a teacher to randomize order of presentations.

### Requirements:
* Login/Logout
* Add Classes (Refered in the app as **Sections** because **Classes** is a reserved word)
* Randomize student order
* Allow for skipping
* Allow for group presentations
* Mutiple Classes with Multiple presentations

### Structure
* All client components will be created in `./imports/ui/components`
* Login system handled by meteor

## Instructions for init
### Part 1. Fork Repo
In depth Instructions [here](https://help.github.com/articles/fork-a-repo/ "Fork a repo").

1. Fork Repo on github: ![fork](https://help.github.com/assets/images/help/repository/fork_button.jpg "Fork")


2. Clone forked repo to local machine
```
$ git clone git@github.com:YOUR-USERNAME/name-from-the-happ
```

3. Configure Git to sync your fork with the original name-from-the-happ repository

  a. Add DarthOstrich fork as upstream
```
$ git remote add upstream git@github.com:DarthOstrich/name-from-the-happ.git
```

### Part 2. Run App
1. Manage dependencies using Yarn

  a. install yarn, if you haven't already
  ```
  $ brew install yarn
  ```
  b. Install NPM dependencies using yarn
  ```
  $ yarn install
  ```
2. Run Meteor
```
$ meteor run
```
3. The first time you run the app, you'll have to create a login. Password requirements have been set to require a minimum of 9 characters.

### Part 3. Editing files and pushing commits
1. Make changes to the files
2. add and commit changes
3. Create pull request with upstream master (DarthOstrich). In depth instructions [here](https://help.github.com/articles/about-pull-requests/ "Pull requests").

![pull](https://help.github.com/assets/images/help/pull_requests/pull-request-review-page.png)

4. DarthOstrich will approve all pull requests.

### Part 4. Deployment
TBD
