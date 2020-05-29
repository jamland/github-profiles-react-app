## Description

Search over github profiles, show profile details and list of public repos, show details about repository.  
`https://api.github.com` used to access github data.
App can be navigated via url this way: `/:username/:repoId`.

## How to run

```
npm install
npm run
```

## Tech Stack

- React.js
- React Router
- Context API

### Folder Structure

```
src
 |
  - components - all UI components can be found here
  - context - data store, data fetch / update things are here
  - services - API services
  - styles - some global styles
  - App.js
  - index.js - app entry file
```

### Styles

[Milligram CSS](https://milligram.io/) was used as style base, since it provides default styles for HTML elements. Styles fetchted in `/public/index.html` file.

### Tests

There are few test files to showcase how app can be tested. `Jest`, `React-testing-library` and `jest-fetch-mock` mostly used for testing.

- `components/RepoList/index.test.js` & `components/RepoList/RepoListItem.test.js` are examples of basic components testing.
- `context/App.context.test.js` have tests of data flow for search and profile as the examples.
- `__tests__/data.mocks.js` is mocked data used for testing.
