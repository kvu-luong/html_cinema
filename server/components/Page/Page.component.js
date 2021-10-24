const express = require('express');
const path = require('path');
let Page = express.Router()

Page.get('/home', function (req, res) {
  res.sendFile(path.join(__dirname+'/../../../ui/src/index.html'));
})

Page.get('/about', function (req, res) {
  res.send('About page')
})

module.exports = Page;
