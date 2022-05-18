'use strict';
const express = require('express');
const router = express.Router();

const controller = require('../controller/controller.js');

router
    .route("/")
    .post(controller.postMQTT);

module.exports = router;