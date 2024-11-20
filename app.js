const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const { handleErrors } = require("./middleware");
const { NotFoundError } = require("./errors");
const { catsRouter } = require("./routes/cats");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/media", express.static(path.join(__dirname, "media")));

app.use("/cats", catsRouter);

app.all("*", (req) => {
  throw NotFoundError(`${req.method} ${req.url}: Route not found`);
});

app.use(handleErrors);

module.exports = app;
