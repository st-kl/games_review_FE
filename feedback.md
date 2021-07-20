Steffen Feedback
Lovely app, really careful attention to detail and there are lots of lovely features.
I've stashed any changes I made and re-run your app and the categories still to not update the reviews, so maybe throw in an nchelp to take a closer look at that.
Some infinite loops happening, please let me know if you need a quick reminder about where we uncovered these.

# Checklist for Northcoders News Front End

## README - write your own and make sure that it:

- [ ] has a link to the deployed version
- [ ] provides general info about your app
- [ ] includes links to your back end repo
- [ ] specifies the minimum version of Node required to run locally (check your Node version, `node --version` and use the major version that you are on)
- [ ] has clear instructions on how to run your project locally (`git clone <repo-url>, cd ...`)

## UX

- [x] Basic styling added
- [x] Responsive design
- [x] Items aligned
- [x] Content legible (not too wide, obstructed, etc)
- [x] Refreshing doesn't cause an issue on sub-pages
- [x] No errors in the console
- [x] Votes / Posts / Deletions happen instantly _OR_ give user indication of loading

## Functionality

### Login

- [ ] Some indication of who is logged in

### Articles (Reviews)

- [x] Serves all articles / top articles
- [x] Can vote on articles
- [ ] Can vote a maximum of once in either direction per page load
  - may want to consider allowing a user to remove their vote/downvote
- [x] Votes are persistent when page is refreshed
- [ ] Topic pages load only relevant articles (especially when navigating from one topic page to another)
- [ ] Can sort articles by date created / comment_count / votes

### Individual Article (Review) / Comments

- [x] Individual articles are served with comments
- [ ] Can vote on comments
- [ ] Can vote a maximum of once in either direction per page load
- [ ] Votes are persistent when page is refreshed
- [x] Can post new comments, which are persistent
- [ ] Can only delete comments of logged in user
- [ ] Deleted comments don't re-appear on re-render/refresh

## Error Handling

- [x] Bad url
- [x] Bad topic slug in url
- [x] Bad article id in url
- [ ] Post comment: (No text in comment body / Can you post without logging in?)
  - can post without logging in/user it automatically logged in..

## Code

- [ ] Well named components
  - Some of these names are a little ambiguous - eg ControlAllReviews -> the name (to me…) suggests this is handling how to display each review.
- [x] Components reused where possible (`Articles` / `Voter`…)
- [x] Minimal state - don't hold derivable data in state
- [x] Set state correctly, using previous state where possible
- [x] Handle asynchronicity clearly (i.e. isLoading pattern)
- [x] Functions are DRY (`handleChange` for controlled components / api calls)
- [x] Use object destructuring where possible
- [x] `node_modules` git ignored
- [x] No `console.log`s / comments
- [ ] remove unnecessary files (e.g. App.test.js)

## MAKE SURE ALL TESTS ARE STILL PASSING IN BACK END

- Floating semi-colon after the header image
- Old NC logo haha!
- Some (maybe…) awkward nesting in your components folders… I could be convinced that this is just my personal preference kicking in…
- Don't appear to be fetching the full body of the article <— we spoke about this
- Fair few unused variable warnings
