import express from "express";
import cors from "cors";
import { getProductById, getProducts } from "./controllers/products.js";

const PORT = process.env.PORT || 3000;

const app = express()
app.use(cors({ origin: "*" }));
app.use(express.json());
app.get("/api/products", getProducts);
app.get("/api/products/:productId", getProductById);


app.listen(PORT, () => {
console.log(`Server running`);

});
