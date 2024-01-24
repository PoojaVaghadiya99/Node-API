require("dotenv").config();

const express = require("express");
const product_routes = require("./routes/products");
const connectDB = require("./db/connect");

const app = express();
const port = process.env.PORT || 8000;

// Routes
app.get("/", (req, res) => {
  res.send("Hi, I am Live");
});

app.use("/api/procucts", product_routes);
const start = async () => {

  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(port, () => {
      console.log(`${port} Yes I am Connected !`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

// app.listen(port,()=>console.log('Server Started at Port ${port}'))
