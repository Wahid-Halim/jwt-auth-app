require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const app = express();

const authRouter = require("./routes/auth.routes");
const userRouter = require("./routes/user.routes");

// middlewares
app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);

// connect db
connectDB();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server is running");
});

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2OTIxNTM0YzE4NzliYTY5MjczYzYxYmIiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3NjM3OTUzNTAsImV4cCI6MTc2Mzg4MTc1MH0.Fdb9jTviRwQ-x8Bzwhvwh-q7Yx6s18JMCqBBwlFmNdw