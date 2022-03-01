require("dotenv").config();

const express = require("express");
const app = express();
const cors = require ("cors")
const mongoose = require("mongoose");
const productsRouter = require("./app/routes/products.routes");
// ("./routes/products.routes");
const usersRouter = require("./app/routes/users.routes");
// ("./routes/users.routes");
const cartRouter = require("./app/routes/cart.routes");
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());
app.use(cors())
app.use("/products", productsRouter);
app.use("/users", usersRouter);
app.use("/cart", cartRouter);
app.listen(process.env.PORT || 3000, () => console.log(" Server started @ American-sterns "));
