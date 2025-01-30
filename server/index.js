import express from "express";
import mongoose, { mongo } from "mongoose";
import cors from "cors";
import usersRouter from "./routes/users.js";
import productsRouter from "./routes/products.js";
import bcy, { genSalt } from "bcrypt";
import User from "./models/users.js";
mongoose
  .connect("mongodb://localhost:27017/coffee-shop")
  .then(() => {
    console.log("connected mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("images"));
app.use("/api/users", usersRouter);
app.use("/api/products", productsRouter);
app.listen(1111, () => {
  console.log("listen on port 1111");
});

// async function addAdmin() {
//   const password = "123";
//   const slat = await bcy.genSalt(12);
//   const hashedPassword = await bcy.hash(password, slat);
//   const reslut = await User.create({
//     email: "admin",
//     role: "admin",
//     password: hashedPassword,
//     userName: "admin",
//   });
//   console.log("create admin with personal", reslut);
// }

// console.log(addAdmin());
