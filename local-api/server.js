/* 
  Local data served by json-serer;
  Delayed response (middleware) to emulate slow remote API 
*/

import dotenv from "dotenv";
import jsonServer from "json-server";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

// Load environment variables from .env.local
dotenv.config({ path: ".env.local" });

// For ES Modules to get __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "data.json"));
const middlewares = jsonServer.defaults();

// Use environment variables with fallback defaults
// eslint-disable-next-line no-undef
const DELAY = process.env.DELAY ? parseInt(process.env.DELAY, 10) : 2000;
// eslint-disable-next-line no-undef
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;

// Add delay middleware
server.use((req, res, next) => {
  setTimeout(() => {
    next();
  }, DELAY);
});

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log(
    `json-server is running with a delay ${DELAY}ms:  \x1b[1mLocal API:\x1b[0m http://localhost:${PORT}/launches`
  );
});
