![poviolabs](https://poviolabs.com/assets/nav/povio-logo-gray.png)

# Moviefavz App


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

👉 View live demo app [on this link](https://poviolabs.github.io/moviefavz/).

<br>


## Project Setup

Clone this repository to your project folder. Run `yarn install` (or npm).

### Main project dependecies
* [React](https://reactjs.org/)
* [React Router](https://reactrouter.com/web/guides/quick-start) - App routing and navigation
* [MobX](https://mobx.js.org/README.html) - State management library
* [PropTypes](https://www.npmjs.com/package/prop-types) - Runtime type checking for React
* [Axios](https://github.com/axios/axios) - Promise based HTTP client
* [Auth0](https://auth0.com/docs/libraries/auth0-react) - Auth0 React SDK client authentication library
* [AntDesign](https://ant.design/) - Design system and Components library
* [Styled Components](https://styled-components.com/) - CSS-in-JS library
* [Polished](https://polished.js.org/) - Toolset for writting styles in JS
* [Craco](https://github.com/gsoft-inc/craco) - Create React App Configuration Override
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) - React DOM testing utilities
* [ES Lint](https://eslint.org/) - JavaScript Linter
* [Prettier](https://prettier.io/) - Code Formatter
* [Husky](https://github.com/typicode/husky) - Git Hooks
* [GH Pages](https://github.com/tschaub/gh-pages) - Deployment to GitHub pages
<br>


## Project configuration and folder structure

Base folder structure:
```bash
├── public
├── src
│   ├── api
│   ├── components
│   │   ├── graphics
│   │   │   ├── __tests__
│   │   │   └── index.js
│   │   ├── layout
│   │   │   ├── __tests__
│   │   │   └── index.js
│   │   ├── typography
│   │   │   ├── __tests__
│   │   │   └── index.js
│   │   └── ui
│   │       ├── __tests__
│   │       └── index.js
│   ├── constants
│   │   └── index.js
│   ├── hooks
│   │   └── index.js
│   ├── router
│   │   ├── Routes.js
│   │   └── index.js
│   ├── screens
│   │   ├── __tests__
│   │   └── index.js
│   ├── static
│   │   ├── fonts
│   │   └── images
│   ├── stores
│   │   └── index.js
│   ├── styles
│   │   └── index.js
│   ├── utils
│   │   └── index.js
│   ├── App.js
│   ├── index.js
│   ├── index.less
│   └── setupTests.js
├── .env
├── .env.example
├── .gitignore
├── .eslintrc.js
├── .prettierrc
├── README.md
├── craco.config.js
└── package.json

```
<br>

#### Configuring app colors

Open `src/styles/colorPalette.json` and change the values according to your needs. **Do not delete any keys or values** since the build process will fail. Adding a new key/value pair will not have any effect on the app visuals.
<br>
Defined colors are used in the places:

* in `craco.config.js` file, which overrides the default styling of AntDesign component library
* in `src/styles/theme.js` file, which provides global theme configuration that can be later used in Styled Components
<br>

#### Providing OMDb API key

Copy the contents of `.env.example` file to `.env` file. Change the value of key `REACT_APP_OMDB_API_KEY` to your omdb api key.
<br>

#### Configuring Auth0 client

Open `src/index.js` and edit the props of `<Auth0Provider>` component to match your credentials and settings.

```javascript
// other imports
import App from  './App';

ReactDOM.render(
	<Auth0Provider
		domain="moviefavz.eu.auth0.com"
		clientId="gs3QJm3RUynqfPJ0f7qH7NPYHkZkq2Qs" // This is a code example application - in a production application this type of information would not be commited into the repository
		redirectUri={window.location.origin}
	>
		<ThemeProvider {...{ theme }}>
			<GlobalStyles  />
			<App  />
		</ThemeProvider>
	</Auth0Provider>,
	document.getElementById('root')
);
```
<br>

#### Configuring app providers for tests

Since adding wrappers to every component's unit test is redundant, the project provides helper wrapper function which automatically wraps all components in specified providers.

In `src/utils/testUtils.js` modify the `AllTheProviders` component to your needs. `children` prop should be nested inside all other providers.

```javascript
import React from  'react';
import  {  render  }  from  '@testing-library/react';

import  {  BrowserRouter  }  from  'react-router-dom';

import  {  ThemeProvider  }  from  'styled-components';
import  {  theme  }  from  '../styles';

const AllTheProviders = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>{children}</BrowserRouter>
		</ThemeProvider>
	);
};

const customRender = (ui, options) =>	render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
```
  
In your tests, import test utils (most importantly `render` method) from `testUtils.js` file. Your tested components will be automatically wrapped in specified providers.

```javascript
import React from 'react';
import { render } from '../../../utils/testUtils'; // <-- this is the important line

import Section from '../Section';

describe('<Section />', () => {
	it('Renders the Component', () => {
		const props = {};
		const container = render(
			<Section {...props}>
				<p>Some child element</p>
			</Section>
		);
		expect(container.firstChild).toMatchSnapshot();
	});
});
```
<br>

#### Configuring app production URL

The project is configured for deployment on GitHub Pages. Since GH Pages generates URL according to this template `<gh_username>.github.io/<repo_name>`, your app does not live in the root of the domain and some additional configuration is required in order for the app to work correctly.

In `package.json` file, change the property `homepage` to your production URL.

Since CRA currently [has an issue](https://github.com/facebook/create-react-app/issues/2575) with reading the homepage property correctly, add `PUBLIC_URL=<your_url>` before `predeploy` script.

```json
"scripts": {
	...
	"predeploy": "PUBLIC_URL='https://poviolabs.github.io/moviefavz' npm run build",
	...
}
```
<br>

## Available Scripts

In the project directory, you can run:
<br>
 
### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
<br>

### `yarn test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
<br>
 
### `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
<br>
 

### `yarn predeploy`

Runs `yarn build` with pre-defined PUBLIC_URL key, which prepares the app for deployment to the GH Pages.
<br>

### `yarn deploy`

Deploys the app to the GH pages (if properly connected to your GH repository)
<br>


## Learn More

 

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

 

To learn React, check out the [React documentation](https://reactjs.org/).

 

### Code Splitting

 

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

 

### Analyzing the Bundle Size

  

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

  

### Making a Progressive Web App

  

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

  

### Advanced Configuration

  

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

  

### Deployment

  

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

  

### `yarn build` fails to minify

  

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify