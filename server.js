import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./utils/db.js";
import itemRoutes from "./routes/item.routes.js";

dotenv.config();
const app = express();

app.use(express.json());   // <-- yeh missing tha, JSON body parse karne ke liye zaroori hai

let port = process.env.PORT || 8000;
dbConnection();

app.use("/api/items", itemRoutes);

app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});