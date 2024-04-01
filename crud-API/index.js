const express = require("express");
const PORT = 8000;
const app = express();
const router = require("./router");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
app.listen(PORT, async () => {
       console.log(`server up on port ${PORT}`);
});

app.use(router);

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
