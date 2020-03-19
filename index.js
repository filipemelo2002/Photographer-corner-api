const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const cors = require("cors");
const Routes = require("./src/routes");

mongoose.connect(
  "mongodb+srv://root:root@cluster0-ipxq5.mongodb.net/pc?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use("/files", express.static(path.resolve(__dirname, "uploads")));
app.use(cors());
app.use(express.json());
app.use(Routes);
app.listen(process.env.PORT || 3100, () =>
  console.log("your server is running at 3100")
);
