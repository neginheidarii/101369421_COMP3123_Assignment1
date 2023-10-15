const mongoose = require("mongoose");
const express = require("express");
const empRouter = require("./router/employeeRoutes");
const userRouter = require("./router/userRoutes");

const app = express();
// PORT
const PORT = 8086;

// connect to mongodb
const DB_CONNECTION_STRING =
  "mongodb+srv://neginDb:Nhd6710@cluster0.tgc1gdl.mongodb.net/comp3123_assignment1?retryWrites=true&w=majority";

mongoose
  .connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log("Cannot connect to Database");
  });

// middleware
app.use(express.json());
app.use(express.urlencoded());

// routes
app.use("/api/v1/emp", empRouter);
app.use("/api/v1/user", userRouter);

// listen to port
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});