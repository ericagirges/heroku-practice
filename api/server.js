const express = require("express");

const server = express();

server.get("/", (req, res) => {
    res.status(200).json({ ciao: "node 34"})
})

module.exports = server;