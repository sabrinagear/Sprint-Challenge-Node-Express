const express = require("express");
const middleware = require("./middleware/config");
const actionRouter = require("./routes/actionRoutes.js");
const projectRouter = require("./routes/projectRoutes.js");

//server
const server = express();

//middleware
middleware(server);

//routes
server.use("/api/actions", actionRouter);
server.use("/api/projects", projectRouter);

module.exports = server;
