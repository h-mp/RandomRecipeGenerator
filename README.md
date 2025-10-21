# Random Recipe Generator

Version 1.0.0
License MIT


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [How to use](#how-to-use)
- [Project structure](#project-structure)
- [Code Quality](#code-quality)
- [Testing](#testing)
- [Contributing](#contributing)
- [Deficiencies](#deficiencies)


## Introduction

Random Recipe Generator is a web application for fetching random recipes from around the world. 
Users can easily convert ingredient measurements between US and Metric systems.

The live version can be accessed here:
[]()

The application is built focusing on:
- Modular web components
- Clear structure and separation of concerns  
- Reusability and scalability  
- Clean and well-documented code

The project follows Clean Code principles as much as possible.


## Features

- Fetches random recipes via [TheMealDB API](https://www.themealdb.com/)
- Displays:
- Recipe name, image, origin, ingredients, and step-by-step instructions
- Converts ingredient units between US <-> Metric
- Handles fractions (`½`, `¾`, `1 1/2`) and text-based measures (e.g., “a pinch”)
- Shows clear error messages


## How to use

1. Visit the website 
2. Click “Get Random Recipe” to fetch a new recipe.
3. The recipe card displays:
  - Image, title, origin, ingredient list, and instructions.
4. Click “Convert Units” to switch between US and Metric systems.
5. Click “Show Original” to go back to the original measurement format.
6. If something goes wrong, an error message is displayed for 5 seconds.


## Project structure

The web application is built using Javascript (ES Modules), css and html. 
Components are divided into two categories: web components and classes. 

An external module called UnitConverter is used to handle conversions. It can be found in the module folder.

A publicly available external API called TheMealDB provides the recipes.


## Code Quality

This project follows the Single Responsibility Principle, as each class or component has a clear purpose.

Examples:
- ApiHandler handles API requests.
- RecipeConverter handles conversion of ingredient measurements.
- RecipeFormulator transforms raw API data into structured recipe objects.

Clean Code:
- camelCase is used consistently in descriptive names
- kebab-casing is used in the names if custom web components
- Concise JSDoc documentation for most methods
- Minimal comments


## Testing

Testing is done using both Jest and manual tests in a browser.

Automatic Jest tests cover classes
- recipeFormulator
- apiHandler
- recipeConverter

To run tests, use the command
```sh
npm run test
```
To run tests and see the line coverage, use the command
```sh
npm run test --coverage
```

Web components are tested manually in the browser. 


## Contributing

Contributions and suggestions are welcome.
To contribute, you can fork this repository and create a feature branch. When you're ready, submit a pull request describing your contribution.

Keep in mind that this project is for a school assignment, and will therefore not be regularly updated or checked on. 


## Deficiencies

Not all measurement conversions are supported yet (for example milliliters) and the web application's current functionality is limited to displaying random recipes. 
Adding the ability  to search and save recipes would also be a significant upgrade in usability in the future.

Due to differing and inconsistent data provided by TheMealDB, not all recipes are handled perfectly or well. For the same reason, temperature and other measurements within instructions cannot yet be converted.

Layout could be made more responsive to accomodate mobile and tablet users.

Only part of the project is tested via Jest, so the coverage is therefore not yet 100%. 