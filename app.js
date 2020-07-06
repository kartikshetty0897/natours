const express = require("express");
const userRouter = require("./routes/userRoutes");
const tourRouter = require("./routes/userRoutes");

const app = express();

app.use("/api/v1/users", userRouter);
app.use("/api/v1/tours", tourRouter);

module.exports = app;
