import regeneratorRuntime from "regenerator-runtime";
import "dotenv/config";
import "./db";
import "./models/video";
import "./models/User";
import "./models/Comment";

import app from "./server";

const PORT = 4000;

app.listen(PORT, () =>
  console.log(`✅server listening on port http://localhost:${PORT}}🚀`)
);
