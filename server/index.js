const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("tiny"));
app.use(express.json());
require("dotenv").config();

const PORT = process.env.PORT;

// Routes
app.use("/api", require("./routes/routes"));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
