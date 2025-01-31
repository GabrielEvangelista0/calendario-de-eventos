import express from "express";
import { createUser, loginUser, getAuthenticatedUser, autenticarJWT, salvarEventosQuerParticipar, getEventosQuerParticipar } from "../controllers/users.js";
const router = express.Router();

router.get("/me", autenticarJWT, getAuthenticatedUser);
router.post("/cadastrar", createUser);
router.post("/login", loginUser);
router.put("/:id/eventos", salvarEventosQuerParticipar);
router.get("/:id/eventos", getEventosQuerParticipar);
export default router;
