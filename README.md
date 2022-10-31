# `FunBox`

# Contents

    1. Description
    
    2. Demo

    3. Directory structure/project

    4. Packages

    5. Style

    6. State management

    7. Test

    8. APIs

    9. Preview of the project

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

# Demo

https://leylaazari.github.io/FUNBOX

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

- react-lazy-load-image-component

# Style

2 type of styles were used in the project:

- **bootstrap**
- **sass**

# State management

I don't use state management in this project. I saved the related data of "Watch List" and "Favourite List" in LocalStorage.
but actually, this information should be send to the server and stored in database, but here I used a temp and quick method!

# Test

The Library used for testing is **React Testing Library**.

![Optional Text](../main/src/assets/images/read-me/test.JPG)

# APIs

Axios is a promise-based HTTP Client for node.js and the browser. this project is used Axios for access to Apis.

![Optional Text](../main/src/assets/images/read-me/tmdb.svg)

## Let's talk about TMDB

The Movie Database (TMDB) is a community built movie and TV database. Every piece of data has been added by our amazing community dating back to 2008. TMDb's strong international focus and breadth of data is largely unmatched and something we're incredibly proud of. Put simply, we live and breathe community and that's precisely what makes us different.

APIs url:

https://api.themoviedb.org/3

|     method      |          params                                                                              |
| :-------------: | :------------------------------------------------------------------------------------------: |
| discover/movie/ | sort_by:"popularity.desc"                                                                    |
| :-------------: | :------------------------------------------------------------------------------------------: |
| discover/movie/ |  certification_country: "US",      "certification.lte": "G",      sort_by:"popularity.desc", |
| :-------------: | :------------------------------------------------------------------------------------------: |
| discover/movie/ |     primary_release_year: "2010",       sort_by:"vote_average.desc",                         |
| :-------------: | :------------------------------------------------------------------------------------------: |
| /search/movie/  |    query                         |


# Preview of the project

This project have 4 pages:

    - Home

    - Search

    - Watch List

    - Favourite List

## Desktop view

![Optional Text](../main/src/assets/images/read-me/d-main.png)

## Tablet view

![Optional Text](../main/src/assets/images/read-me/d-tablet.png)

## Mobile view

![Optional Text](../main/src/assets/images/read-me/d-mobile.png)

### Search

![Optional Text](../main/src/assets/images/read-me/search.JPG)

## Watch List

![Optional Text](../main/src/assets/images/read-me/watch.JPG)

## Favourite List

![Optional Text](../main/src/assets/images/read-me/favourite.JPG)
