//DEPENDENCIES
require("dotenv").config();
const PORT = process.env.PORT || 3000;
import express from "express";

const app = express();

//Root Route
app.get("/", (req, res) => {
  res.send("Welcome to Pause");
});

app.listen(PORT, () => {
  console.log(`I'm listening on port ${PORT}`);
});
