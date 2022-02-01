const express = require("express");

const { renderIndex, renderOrder } = require("../controllers/views.controller");

const router = express.Router();

router.get("/", renderIndex);

router.get("/orders", renderOrder);

module.exports = { viewsRouter: router };
