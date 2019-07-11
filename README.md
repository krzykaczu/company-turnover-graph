Fully-featured demo available at [http://bit.ly/CompanyTurnoverApp](http://bit.ly/CompanyTurnoverApp)

## Installation
Before running the app locally please uncomment `export const endpoint = "http://localhost:4000"`
```typescript
// src/utils/endpoint.tsx
export const endpoint = "http://localhost:4000"
```
and comment:
```typescript
 // src/utils/endpoint.tsx
// export const endpoint = "https://company-turnover-server.herokuapp.com/"
```

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
