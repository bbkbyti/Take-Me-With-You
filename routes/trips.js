import { Router } from "express";
import { restrict } from "../helpers/restrict.js";
import * as controllers from "../controllers/trips.js";

const router = Router();

router.get("/trips", controllers.getTrip)

router.get("/trips/:id", controllers.getOneTrip);

router.post("/trips", restrict, controllers.createTrip)

router.put("/trips/:id/edit", restrict, controllers.updateTrip);

router.delete("/trips/:id", restrict, controllers.deleteTrip);

export default router;