import express from "express";
import productRouter from "./routers/product";
import cors from "cors";
import { connectDb } from "./config/db";
import authRouter from "./routers/auth"
const app = express();
app.use(express.json());
app.use(cors());
connectDb();

app.get("/", (request, response) => {
  console.log("resquet");
});

app.use("/api", productRouter);
app.use("/api", authRouter);

export const viteNodeApp = app;
