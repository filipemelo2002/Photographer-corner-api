const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const Routes = require("./src/routes");
const { errors } = require("celebrate");

app.use(cors());
app.use("/files", express.static(path.resolve(__dirname, "uploads")));
app.use(express.json());
app.use(Routes);
app.use(errors());

app.listen(process.env.PORT || 3100, () =>
  console.log("your server is running")
);
