import { Router } from "express";

import { Hello } from "../controllers/userController";

const router = Router();

router.get("/", Hello);

export default router;