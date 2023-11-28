import express from "express";
import partsRouter from "./routers/partsRouter/partsRouter.js";

export const app = express();
app.disable("x-powered-by");

app.use(express.json());

app.use("/parts", partsRouter);
