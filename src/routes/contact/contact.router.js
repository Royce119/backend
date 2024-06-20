const express = require("express");
const contactRouter = express.Router();
const { postContactForm } = require("./contact.controller");

contactRouter.post("/contact", postContactForm);

module.exports = contactRouter;
