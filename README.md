<h1>NodeJS-Express-Typescript-GraphQL Template</h1>

 <p> - This is an express bolierplate created with the help of the following libraries:</p>

## Libraries
1. <a href="https://expressjs.com" target="_blank">Express JS</a> - A minimalist web framework.
2. <a href="https://graphql.org" target="_blank">GraphQL</a> - Query fro your API. Used with Type GraphQL.
3. <a href="https://swagger.io/docs" target="_blank">Swagger Docs</a> - Documenting your rest API. Uses [express-jsdoc-swagger](https://brikev.github.io/express-jsdoc-swagger-docs/#/)</br>

## Development

The scripts below will be necessary when running the project in Development mode. <br/>

### `yarn migrate:latest`

Creates database migrations using Knex Library <br/>

### `yarn seed:run`

Prefills the database with seed data <br/>

### `yarn dev`

Runs the app in development mode <br/>

## Production

The scripts below will be necessary when running the project in Production mode. <br/>

### `yarn test`

Launches the test runner.<br />

### `yarn test:watch`

Lauches the test runner in interactive watch mode.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles src folder in production mode and optimizes the build for the best performance. <br />
### `yarn start`

Runs the app in the production mode after running `yarn build`.<br />
Open [http://localhost:{process.ENV.PORT}](http://localhost:{process.ENV.PORT}) <br >

### `yarn start:build`

Runs the app in production mode but first builds the app <br />
