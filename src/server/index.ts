import express from "express";
import partsRouter from "./routers/partsRouter/partsRouter.js";
import cors from "cors";

export const app = express();
app.disable("x-powered-by");

const options: cors.CorsOptions = {
  origin: "http://localhost:5174",
};

app.use(cors(options));
app.use(express.json());

app.use("/parts", partsRouter);
