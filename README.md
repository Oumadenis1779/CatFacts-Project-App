# Cat Fact Project
This is a simple React project that fetches cat facts from an external API and displays them on a web page. Users can click a button to retrieve new cat facts.

# Getting started with creating react app

Clone the repository and install the depenencies

## Available Scripts

 # App.js: 

   The main component that sets up the React Router and renders other components.

 # Header.js:

   Renders the navigation header with links to different sections of the app.

 # Home.js: 

   Displays a welcome message on the home page.

# CatFact.js:

  Fetches and displays random cat facts. Includes a button to get a new fact.

 # About.js: 

  Provides information about the Cat Facts app.

 # Routes
The app includes the following client-side routes:

Home: The default landing page with a welcome message.
Cat Fact: Displays a random cat fact fetched from an external API.
About: Provides information about the Cat Facts app.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Usage

 # Home Page:
   - Upon starting the app, you will be directed to the home page displaying a welcome message.

 # Navigation:
   - Use the navigation links in the header to explore different sections of the app.
     - Click on "Cat Fact" to view and fetch random cat facts.
     - Click on "About" to learn more about the Cat Facts app.

 # Cat Fact Section:
   - Navigate to the "Cat Fact" section to view a random cat fact.
   - Click the "Get New Fact" button to fetch and display a new cat fact.

# About Section:
   - Visit the "About" section to get information about the Cat Facts app.

 
   - If you enter an invalid URL, you will be redirected to a 404 page.

# Styling:
   - The app is styled for a pleasant user experience. 
   - CSS has been used to create visually appealing layouts and designs.
   
# Testing:
 # (Cat Facts):
   - The app fetches random cat facts from an external API. By default, it uses a placeholder API (https://meowfacts.herokuapp.com/) in the `CatFact.js` component. If needed, you can replace it with a different API endpoint.

 

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!



