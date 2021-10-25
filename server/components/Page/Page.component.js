const express = require('express');
const path = require('path');
let Page = express.Router()

Page.get('/home', function (req, res) {
  res.sendFile(path.join(__dirname+'/../../../dist/index.html'))
})


Page.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname+'/../../../dist/about.html'))
})

module.exports = Page;
