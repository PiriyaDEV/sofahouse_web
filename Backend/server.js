const dotenv = require("dotenv");
const express = require("express");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");

const logger = require("./lib/logger/index");

// use config environment from .env
dotenv.config();

// create an application object
const app = express();

// create a server instance
const server = http.createServer(app);

// define cors options
const corsOptions = {
  origin: ["http://localhost:3000"],
};

// enable cross-origin resource sharing
app.use(cors(corsOptions));

// parse requests of content-type: application/json
app.use(bodyParser.json({ limit: "20mb" }));

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true, limit: "20mb" }));

// parse requests to router
const router = require("./app/routes");
app.use("/api/v1", router);

// set port and start a server
const PORT = process.env.PORT || 3030;
server.listen(PORT, () => {
  logger.info(`Sofa House's API server is running on port ${PORT}.`);
});

// handle 404 requests
app.use((req, res) => {
  res.status(404).send(`<h1>404 Page Not Found!</h1>`);
});
