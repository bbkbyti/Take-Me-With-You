import { Router } from "express";
import usersRoutes from "./users.js";
import tripRoutes from "./trips.js";

const router = Router();

router.get("/", (req, res) => res.send("this is api root"));

router.use("/", usersRoutes);
router.use("/", tripRoutes);

export default router;
