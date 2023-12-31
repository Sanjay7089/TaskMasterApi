import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import Connection from "./Database/db.js";
import Routes from "./routes/routes.js";

const app = express();

const PORT = process.env.PORT || 8000;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "https://master--charming-cupcake-a081c7.netlify.app",
    methods: "GET,POST,PATCH,DELETE",
  })
);

app.use("/", Routes);

Connection();

app.listen(PORT, () =>
  console.log(`Your server is running successfully on PORT ${PORT}`)
);
