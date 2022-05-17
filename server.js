const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

// Route files
const bootcamp = require("./routes/bootcamps");

// Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Mount routers
app.use("/api/v1/bootcamps", bootcamp);

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Hello from express");
});

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
