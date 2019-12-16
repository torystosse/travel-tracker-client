[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Oh, the Places You've Been!

A travel tracker SPA.

## The Application

This application is a traveler tracker SPA. A user can sign up and sign in, and
once signed in, they can change their password and sign out. When signed in, they
have the ability to create two "trackers": 1. where they have traveled (with country
and year) and 2. a travel bucket list (with country and rank, i.e. ranking their
top want-to-see countries).

Within each tracker, the user has the option to create a new tracker, or view
their tracker. If they have already created a tracker, clicking 'create' will
generate an error, telling them to click 'view my tracker'. If it is a new user,
then can create and add countries to their tracker. If they have one created, then
when they click 'view my tracker', their list of countries visited will populated,
and is sorted by year traveled. The bucket list is sorted by rank. The user can
then update or delete single items from this list, and it will automatically
re-display the updated list.

An instructions button has been included in the navigation to assist first time
users.

[Link to API Repo](https://github.com/torystosse/travel-tracker-api)


## Background

### The Planning

The goal was to create a full stack application that can CRUD on a single resource.
I wanted to create something related to topic that I am interested in, and a travel
tracker seemed like the perfect option. I began by creating thorough user stories,
then detailed wireframes, and then an ERD to give myself a basis to work towards.
From there, I created a schedule outlining what I would accomplish each day,
starting with completing all the set up work and building the basic API, then
moving onto the front-end. I started off with just the travel tracker, and while
I wanted the bucket list tracker, that was a feature that I would work towards, if
I accomplished everything else. Focusing on MVP allowed me to not get bogged down
on details outside of the scope of my project MVP.



### The Process & Problem Solving

As stated above, I began with the API, and then moved onto the auth front end,
and then resource front end. By starting off with the one resource, and not adding
my second resource after, it allowed me time to focus on getting the details right,
and to solve any bugs that came up.

Some of the problems I had to work through were:
- When creating a resource, it gave a success response, but values were null
- Working through layout issues with bootstrap/flexbox, and how to have the two
  trackers display in a user-friendly manner.
- If a user has already created a tracker, then clicking 'create' should generate
  an error message.

In order to solve these issues, I utilized my peers and instructors to help guide
me in the right direction, and give me an idea of the best way to solve the issue.
Utilizing Google and the various documentations for the technologies used also
proved to be a big help.


### Remaining Unsolved Problems

In future iterations, I would:

- Refactor the code to make it more DRY.
- Make the 'update tracker' section more user-friendly by:
  - Creating just one 'update' button, that will then populate the form once clicked.
- I would like to make both tracker sections more user friendly.
- I would consider making it so a user can't create bucket list items with the same rank.
- I would make the application more mobile-friendly.





### Technologies Used

1. Ruby on Rails
2. JavaScript
3. jQuery
4. AJAX
5. SQL
6. Handlebars
7. HTML
8. CSS
9. Bootstrap

### Wireframes & User Stories

[Wireframe 1](https://imgur.com/ehhsp2Z)
[Wireframe 2](https://imgur.com/dK7EAd7)
[Wireframe 3](https://imgur.com/eK2jxbo)
[Wireframe 4](https://imgur.com/VmnE7Q6)
[Wireframe 5](https://imgur.com/4Qogq5s)
[Wireframe 6](https://imgur.com/CYillB7)


#### User Stories:

```
- As an unregistered user, I would like to sign up with email, password, and password confirmation
    - If email is already taken, I want to receive an error message
    - If PW & PW confirmation don’t match, I want to receive an error message
    - If email is new, and PW & PW confirmation match, then I want to receive a success message
- As a logged in user, I would like to see the options to sign out and change my password.
- As a logged in user, I would like to be able to change my password with my old password and create a new password
    - If old password is incorrect, I want to receive an error message
    - If new password is the same as old password, I want to receive an error message
    - If old password is correct, and new password is a new password, I want to receive a success message
- As a logged in user, I would like to either 1) see my travel tracker if it exists, or 2) have the option to create a new travel tracker
    - I would like there to be a reminder to not add the country I currently live in
    - If my travel tracker does not exist, I would like the option to:
        - Create my travel tracker with:
            - Name of country
            - Year traveled to that country
    - If my traveler tracker exists, I would like the option to:
        - Read:
            - The name of the country
            - The year I traveled to that country
        - Update the year I traveled to that country
        - Update the name of the country
        - Delete the country
        - Add a new country
        - See one country
- As a logged in user, I would like to be able to see how many countries I have traveled to
    - I would like the country I currently live in to be automatically added to this count

Feature User Stories:

- As a logged in user, with a travel tracker, I would like to see the percent of countries in the world I have visited
- As a logged in user, I would like to be able to rank the order of my favorite countries
- As a logged in user, with OR without a travel tracker, I would like the option to create a travel wish list with:
    - Name of country
    - Rank
```

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
