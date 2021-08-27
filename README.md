# Board Game Reviews

## Project

A website giving an overview of games reviews, allowing the user to add comments and upvote or downvote each review.
This is the matching frontend application for the "Games Review API", from where the data is fetched.

A productive version is hosted on Netlify:\
https://games-reviews-sk.netlify.app/. \

### Highlights

- **Expandable Elements:** The comment section can be shown/hidden with the click of a button
- **Optimistic Rendering:** Upvotes/Downvotes are handles using optimistic rendering, update the value first before updating the information in the backend to allow for a smoother user experience
- **User Context:** The whole app is wrapped in a user context to allow for individual accounts and comments
- **Styled Components:** The `styled components` library is used to created each html element
- **Components:** Each part of the website (e.g. filter section) is abstracted as individual component

### Extension Ideas

- user login and account page
- delete/edit comment
- create new review

### Major Used Packages

- Frontend library: `React`
- Frontend styling: `styled components`
- HTTP requests: `axios`

---

## Setup

### Step 1 - Clone

- fork the repo
- clone it to your local machine: `git clone <url>`

### Step 2 - Install Dependencies

- in your cloned repo, open a new terminal and run `npm install` to install all packages
- if you don't need any of the dev dependencies, run `npm install --production`

### Step 3 - Run

- run `run start` to run the app in your browser

---

## Version Requirements

- `Node.js`: 16.0.0 or higher
