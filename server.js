const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const app = express();

app.use(express.json());

const db = config.get("mongoURI");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("💻 Mondodb Connected"))
  .catch(err => console.error(err));

app.get("/", (req, res) => {
  res.send("Server working 🔥");
});

app.use("/api/data", require("./routes/api/data"));

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port} 🔥`);
