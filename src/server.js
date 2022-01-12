import express from "express";

const PORT = 4000;
const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const handleHome = (req, res) => {
  return res.send("i love middlewares!");
};

app.use(logger);

app.get("/", handleHome);

app.listen(PORT, () =>
  console.log(`✅server listening on port http://localhost:${PORT}}🚀`)
);
