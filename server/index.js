const express = require("express");
const app = express();
const morgan = require("morgan");
const PORT = process.env.PORT;
app.use(morgan("tiny"));
app.use(express.json());
require("dotenv").config();

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
