# Waracle Front-End challenge

## Functionalities

- uploading the cat images
- listing up to 50 of the uploaded images
- viewing the images in the modal on click
- favouriting the uploaded images
- upvoting and downvoting the images (supporting up to 10,000 votes)

## How to run it

- copy `.env.example` in the root folder to `.env` (it already contains my API KEY for your convenience, but you can use yours)
- run `npm install`
- run `npm start` (that will stary the dev build)
- you can also run a production build by typing `npm run build` and then starting the server with `serve -s build` (`serve` needs to be installed in your system first)

## Tech-Stack

- React
- Redux
- Redux-Saga
- typesafe-actions
- styled-components (with theming)
- Axios

## Principles

- the entire functionality of the app is action-driven
- all the actions, reducers and the entire state are fully typed
- each request is retried 3 times before it throws an error
- redux-sagas are used for all the async operations
- single source of truth (the BE is the only source of truth, local state isn't used to avoid potential sync issues)
- the store contains only the data needed for the app to function
- all the logic required to transpile the responses sits within the sagas

## Browser compatibility

The project is compatible and has been tested on:

- Google Chrome (last 2 versions)
- Apple Safari (last 2 versions)
- Mozilla Firefox (last 2 versions)
- Microsoft Edge (last 2 versions)

Internet Explorer 11 support is doable, but it would require a few polyfills and CSS changes. I decided that it's beyond the scope of this exercise.

## What is missing (which I would add if I had more time)

- more tests (especially tests for sagas)
- deleting the images
- better error handling and loading state (nicer animations etc.)
- some action creators and saga helper functions could be wrapped in more generic functions to reduce the code repetition
- some types could possibly be unified and made more generic
- more consideration towards the SEO and accessibility
- proper error handling for the favourites and votes
  
## Things to be aware of

- `TheCatApi` is not the greatest API out there. E.g. the votes are terrible for the purpose I need them in the app. The endpoints require the `limit` attribute to be set, otherwise, they only return a single item. That's a serious limitation as I need all the votes to calculate the score and the number of votes grows exponentially.
- I have limited the number of images to **50** and the number of votes to **10,000**. For this reason, **PLEASE DO NOT USE THE DEMO API KEY** because the app will not work properly (the number of votes is astronomical and I only fetch 10,000). Please use my API KEY or get a fresh one.
- I use saga to trigger the file uploads. This is not entirely correct, as actions should only contain serialised data, but I decided to make that exception to keep things nice and consistent.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />

