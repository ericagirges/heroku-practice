const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res
    .status(200)
    .json({ ciao: "node 34", environment: process.env.NODE_ENV });
});

module.exports = server;
