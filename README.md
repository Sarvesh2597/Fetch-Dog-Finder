# Fetch Take Home Challenge

# Introduction
A web application developed for users to browse dogs and find their perfect match. This application consists of a Login Page where user can enter their Name and Email and navigate them to their dashboard. The dashboard features a list of 1000+ dogs for users to view and allow them to filter out the search using filters like Breed, Age, Name, etc. The application also consists of a favorite feature which allows the user to favorite multiple dogs and allow them to find their perfect companion!!


## Website URL

Dog Finder web hosted URL: (https://sarvesh2597.github.io/Fetch-Dog-Finder/)

## General Requirements for This Assignment

- **Login Screen:**

  - Users must enter their name and email.
  - Use this information to authenticate via the login endpoint in the provided API reference.

- **Dashboard:**

    - Users authenticated successfully should access a search page with the following features:
    - Ability to filter by breed.
    - Pagination for search results.
    - Default sorting of results by breed in alphabetical order. Users can modify the sort order (ascending/descending).
    - All fields of the Dog object (except for ID) should be presented.

- **Favorites Page:**

  - Users can mark dogs as favorites from search results.
  - Option to generate a match based on favorited dogs using the `/dogs/match` endpoint.
  - Display the generated match as appropriate.

### Additional Requirements

- **Hosting:**

  - The app should be hosted online for interaction.

- **Source Code Management:**

  - Store source code in a git repository hosted on platforms like GitHub.

- **Documentation:**
  - Include necessary documentation for local setup and running of the site.

## Getting Started

### Prerequisites

Things required to run this project:

- Make sure you have Node.js installed on your machine.
- These package managers are used to install project dependencies and execute scripts defined in the `package.json` file.
- For development purposes, familiarity with Vite, a build tool, would be beneficial. It's primarily used during development and not necessary for running the production build.

### Running Locally

To run this project locally, follow these steps:

1. Ensure you have Node.js installed. Download it from (https://nodejs.org/) if not already installed. Node.js includes npm, the Node.js package manager.

2. Clone or download the project repository from its source, such as GitHub.

3. Open a terminal or command prompt, navigate to the project directory, and run:

   npm install or yarn install

4. After installing all the dependencies, use the following command to run the application:

   npm run dev or yarn dev

## Folder Structure

- node_modules/
- public/
- src/
  - assets/
    - dogimage2.jpg
    - logo1.png
  - components/
    - Breeds.tsx
    - DogCard.tsx
    - Favorites.tsx
    - Footer.tsx
    - Login.tsx
    - Nav.tsx
    - Pagination.tsx
    - Search.tsx
    - SearchResults.tsx
  - styles/
    - breeds.css
    - dog-card.css
    - favorites.css
    - footer.css
    - login.css
    - nav.css
    - search-results.css
    - search.css
  - tests/
    - testDogAPI.ts
  - utils/
    - dogAPIUtil.ts
    - fetchBreeds.ts
  - App.tsx
  - index.css
  - main.tsx
  - vite-env.d.ts
- .eslintrc.cjs
- .gitignore
- index.html
- netlify.toml
- package-lock.json
- package.json
- README.md
- tsconfig.json
- tsconfig.node.json
- vite.config.ts


