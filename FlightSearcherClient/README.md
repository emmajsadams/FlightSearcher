Whenever this guide says Run `command` it means run it from this app's directory.

# Initial setup
* Install Node.js `8.9.0`
* Run `npm install` to install all necessary dependencies into node_modules. It may take a while.
* Run `npm run dev` to run a development server on `localhost:8080` that will render the app while reloading on file changes.
* I recommend Visual Studio Code for it's out of the box typescript support, and because I used it for this https://code.visualstudio.com.

## Architecture
This app uses React and Redux at its core. React is used to render components whereas redux manages application wide state changes that are typically async. TypeScript is used instead of JavaScript to achieve type safety. Tslint is used to keep code clean according to `tslint.json` and automatically fix certain linting violations.

* `actions` contains all redux actions for dispatching to reducers.
* `api` contains all the redux api thunks for making requests to apis and dispatching actions in response.
* `components` contains all the react presentational components. These components have no redux dependencies and can be easily reused across apps. Ideally most react components are of this category due the reusability. See https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0 for inspiration.
* `containers` contains all of the react container components. These components provide redux state and dispatch to the `components` and thus are usually highly specific to this app. Harder to reuse.
* `reducers` contains all redux reducers and related tests. The tests use fetch-mocked api requests. With the mocked response the test checks for expected actions and state after dispatching an API call or event. 
* `selectors` contains all redux selectors for retrieving specific data from the redux state.
* `types` contains all TypeScript types.
* `utility` contains any miscellaneous highly reusable functions. Typically things like date and time manipulation.

# Testing
## Running Tests
* Run `npm test` to run the full suite of tests. This command uses webpack to produce a node build for running the tap framework.
* Run `npm run test-watch` to run `npm test` on file change.
* Ignore the warning for "WARNING in ./node_modules/encoding/lib/iconv-loader.js". It should not be an issue.

## Potential improvements for the tests
* Use a library like `testem` to run tests on change across all browsers to check for browser specific regressions.

# Production
## Building the app for production
Run `npm run build` from the app directory to minify typescript and produce a single browser compatible JavaScript bundle and create the necessary index.html file.

## Potential Improvements 
* The app could use universal rendering to decrease the initial page load time. A library like https://github.com/nfl/react-helmet helps.
* Docker might help manage deployment and development across multiple environments.
* As more people are added to the app something like git flow would make sense http://nvie.com/posts/a-successful-git-branching-model/. This is a way of using git that allows for many people working on features to easily work together. It also produces versioned releases of the app.