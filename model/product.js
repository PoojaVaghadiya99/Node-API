const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: [true, "Price Must be Provided"] },
  featured: { type: Boolean, default: false },
  rating: {
    type: Number,
    default: 4.9,
    required: [true, "Rating Must be Provided"],
  },
  creditedAt: { type: Date, default: Date.now() },
  company: {
    type: String,
    enum: {
      values: ["apple", "samsung", "dell", "mi"],
      message: `{VALUE} is not supported`,
    },
  },
});

module.exports = mongoose.model("Product", productSchema);
