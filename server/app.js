require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const app = express();
const cors = require("cors");
const authRouter = require("./routes/auth.routes");

// middlewares
app.use(express.json());

app.use(cors());

app.use("/api/v1/auth", authRouter);

// connect db
connectDB();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server is running");
});
