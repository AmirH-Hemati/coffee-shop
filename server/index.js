import express from "express";
import mongoose, { mongo } from "mongoose";
import cors from "cors";
import usersRouter from "./routes/users.js";
import productsRouter from "./routes/products.js";
mongoose
  .connect("mongodb://localhost:27017/coffee-shop")
  .then(() => {
    console.log("connected mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());
app.use("/api/users", usersRouter);
app.use("/api/products" , productsRouter);
app.listen(1111, () => {
  console.log("listen on port 1111");
});
