# Website Storage

### A simple website to accept urls and display a list of valid url and their descriptions

## Run locally


### Set up database

#### You must have mysql installed 
(`brew install mysql`);

`npm init`

### Run 

`npm install`
`npm start`

Navigate to go to localhost:8080.

### Testing

`npm test`

## Tech Stack
- React
- Node/Express
- MySql
- Webpack
- Mocha

## API Endpoints
There are two API endpoints that recieve websites and return list of all valid websites

| API Endpoint        | Type        | Description
| :------------- |:-------- |:-------- 
| /newWebsite      | POST | Expects an object with a key, "name" and a url, "description" and its description {name: google.com, description: "searching website"} Expects url to be in format name.domain with no www etc to retrieve valid results. 
| /allValidWebsites/| GET | Returns a JSON object with keys, "name", "description","time_posted", , containing the url requested, the description, and the time it was posted |  

