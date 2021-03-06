const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavouriteProductSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "products",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("favouriteProduct", FavouriteProductSchema);
