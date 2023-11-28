import { Router } from "express";
import { getParts } from "../../controllers/partsControllers/partsControllers.js";

const partsRouter = Router();

const getPartsRoute = "/";

partsRouter.get(getPartsRoute, getParts);

export default partsRouter;
