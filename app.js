const express = require("express");

const catsRouter = require("./api/routes/cats.routes");
const connectDB = require("./database");
const morgan = require("morgan");
const { handleErrors } = require("./middlewares");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use("/cats", catsRouter);
app.all("*", (req, res) => {
  res
    .status(404)
    .json({ message: `${req.method} ${req.url}: Route not found` });
});

app.use(handleErrors);

const PORT = 1337;

connectDB();

app.listen(PORT, () => {
  console.log(`The server is running on port http://localhost:${PORT}`);
});
