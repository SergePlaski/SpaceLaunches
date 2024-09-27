# Cape Canaveral Space Launch Calendar and Countdown

## TODO:
1. Footer positioning @ mobile
2. Error/No Data Modal

## About this App

I live near the Kennedy Space Center on Cape Canaveral, Florida, which means I sometimes get to witness space launches from the beach, especially on clear days or during night launches. One of the most memorable experiences was seeing the final liftoff of the Atlantis space shuttle (STS-135) on July 8, 2011.

Inspired by this, I thought it would be a fun weekend project to build an app that tracks the schedule of upcoming launches from Cape Canaveral, complete with a countdown to the next mission.

The app is built using React and Vite. For this project, I decided to try Cursor IDE, and I have to say, I’m impressed. It’s very similar to VS Code but comes with basic yet helpful and non-intrusive AI helper right out of the box.

## About the Data and Back-End

To the best of my knowledge, neither NASA nor the KSC offer space mission data in an easily consumable format like an API or RSS feed. Instead, I rely on data provided by NASASpaceflight LLC, which is available for free on their website. However, due to CORS limitations, this data cannot be fetched directly client-side. To fetch and parse that data, I am using the API I have built with Node.js/Express.js that I use exclusively for development/testing and educational/non-commercial projects. JSDOM library is used to parse the HTML.

## Local Data and Testing

Sample data file data.json can be used for local testing in dev environment (ENV_MODE=development)
There are two scripts available locally: 
- local-api: runs json-server with data.json directly;
- slow-api: runs localserver.js that implements a middleware for json-server with a delayed output. This script emulates a slow remote API response to test the data loading behavior.