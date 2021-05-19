import { json } from "body-parser";
import * as express from "express";
import morgan = require("morgan");
import * as cors from "cors";

import router from "./controllers/store.controller";
import storageController from "./controllers/storage.controller";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

// Router
app.use(router);
app.use(storageController);

export default app;
