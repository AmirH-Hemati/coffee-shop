import mongoose, { mongo } from "mongoose";
const productSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: String },
  image: {
    type: String,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb5bqC7IA8JdjL19Ko8baj61wNE8Qlab3GWw&s",
  },
  rating: { type: Number, min: 0, max: 5, default: 4 },
});

export default mongoose.model("product", productSchema);
