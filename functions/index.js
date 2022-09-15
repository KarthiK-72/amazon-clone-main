const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "pk_test_51J9DOlSF7tQRNhd2bqYNFEH4q11ymWZu6NkwsAADKqdIuGA2fkNFZuTA7lC0EWuTgXMC4gIE328X3oaHGzn7mfg700PS5txIct"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
exports.api = functions.https.onRequest(app);
