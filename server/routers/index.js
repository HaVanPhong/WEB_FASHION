const authRouter = require("./auth");
const cartRouter = require("./cart");
const orderRouter = require("./order");
const productRouter = require("./product");
const categoryRouter = require("./category");
const feedbackRouter = require("./feedback");
const favouriteProductRouter = require("./favouriteProduct");
const errorHandle = require("../middlewares/errorHandle");

module.exports = (app) => {
  app.use("/api/auth", authRouter);

  app.use("/api/product", productRouter);

  app.use("/api/category", categoryRouter);

  app.use("/api/cart", cartRouter);

  app.use("/api/order", orderRouter);

  app.use("/api/feedback", feedbackRouter);

  app.use("/api/favouriteProduct", favouriteProductRouter);

  app.use(errorHandle);
};
