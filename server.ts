//DEPENDENCIES
require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 3000;

const app = express();

//ROUTER
app.get("/", (res: any) => {
  res.send("Welcome to Pause");
});

//SERVER LISTENER
app.listen(PORT, () => {
  console.log(`I'm listening on port ${PORT}.`);
});
