# `FunBox`

# Contents

    1. Description

    2. Directory structure/project

    3. Packages

    4. Style

    5. State management

    6. Test

    7. APIs

    8. Preview of the project

        * Desktop view

        * Mobile view

        * Search

        * Watch List

        * Favourite List

# Description

There’s something I like more than React though it is movies. Especially good movies. But also
bad movies. So what we’re gonna build today is an application for searching for just that,
movies.

Features:
● A search field and like a table for showing the result.
● It should also have functionality for setting movies as your favourites, maybe with a star
symbol in the table.
● A list where you can add movies you want to watch, like the “watch later” functionality on
YouTube.

# Directory structure/project

React doesn’t have opinions on how you put files into folders. there are a few common approaches popular in the ecosystem:

- Grouping by feature or routes
- Grouping by file type

**Colocation**: it is a good idea to keep files that often change together close to each other. This principle is called “Colocation”.

In this project I used **Group by feature or routes**. In this way all of file related a component (sass, test, …) is in the same folder.

# Packages

These packages are installed in this project:

- testing/library

- axios

- sass

- node-sass

- react-router-dom

- react-hook-form

# Style

2 type of styles were used in the project:

- **botstrap**
- **sass**

# State management

I don't use state management in this project. I save data into LocalStorage.

# Test

The Library used for testing is **React Testing Library**.

![Optional Text](../main/src/assets/images/read-me/Test.jpg)

# APIs

Axios is a promise-based HTTP Client for node.js and the browser. this project is used Axios for access to Apis.

APIs url:

https://api.themoviedb.org/3

|     method      |          params           |
| :-------------: | :-----------------------: |
| discover/movie/ | sort_by:"popularity.desc" |

# Preview of the project

This project have 2 pages:

    - Home

    - Search

    - Watch List

    - Favourite List

## Desktop view

![Optional Text](../main/src/assets/images/read-me/d-main.png);

## Tablet view

![Optional Text](../main/src/assets/images/read-me/d-tablet.png);

## Mobile view

![Optional Text](../main/src/assets/images/read-me/d-mobile.png);

### Search

![Optional Text](../main/src/assets/images/read-me/search.jpg);

## Watch List

![Optional Text](../main/src/assets/images/read-me/watch.jpg)

## Favourite List

![Optional Text](../main/src/assets/images/read-me/Favourite.jpg)
