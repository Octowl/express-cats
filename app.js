const express = require("express");

const catsRouter = require("./routers/routes/cats.routes");

const app = express();

app.use(express.json());

app.use("/cats", catsRouter);

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`The server is running on port http://localhost:${PORT}`);
});
