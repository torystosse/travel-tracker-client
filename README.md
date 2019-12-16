[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Oh, the Places You've Been!

A travel tracker SPA.

## The Application

This application is a traveler tracker SPA. A user can sign up and sign in, and
once signed in, they can change their password and sign out. When signed in, they
have the ability to create two "trackers": 1. where they have traveled (with country
and year) and 2. a travel bucket list (with country and rank, i.e. ranking their
top want-to-see countries.) W

Within each tracker, the user has the option to create a new tracker, or view
their tracker. If they have already created a tracker, clicking 'create' will
generate an error, telling them to click 'view my tracker'. If it is a new user,
then can create and add countries to their tracker. If they have one created, then
when they click 'view my tracker', 




## Background

### The Planning




### The Process & Problem Solving





### Remaining Unsolved Problems

In future iterations, I would:

- Refactor the code to make it more DRY
- Make the 'update tracker' section more user-friendly by:
  - Creating just one 'update' button, that will then populate the form once clicked
- I would consider making it so a user can't create bucket list items with the same rank




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

![Wireframe 1]()
![Wireframe 2]()
![Wireframe 3]()

#### User Stories:

```
- As an unregistered user, I would like to sign up with email, password, and password confirmation
    - If email is already taken, I want to receive an error message
    - If PW & PW confirmation don’t match, I want to receive an error message
    - If email is new, and PW & PW confirmation match, then I want to receive a success message
- As a logged in user, I would like to see the options to sign out, change my password, see how many games I have played, and have an option to start a new game
- As a logged in user, I would like to be able to change my password with my old password and create a new password
    - If old password is incorrect, I want to receive an error message
    - If new password is the same as old password, I want to receive an error message
    - If old password is correct, and new password is a new password, I want to receive a success message
- As a logged in user, I would like to play the game by clicking a start game button
    - By clicking this button, the game board should appear
    - A successful start game should allow player X to select the first move
    - The moves should rotate between X and O
    - I should receive an error message if I try to choose the same spot twice
    - If a player gets 3 matching spots in a row horizontally, vertically, or diagonally, the display should say winner
    - If no players get 3 matching spots in a row horizontally, vertically, or diagonally, the display should say tie
```

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
