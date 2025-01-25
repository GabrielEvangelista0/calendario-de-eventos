import * as UserController from "../controllers/users.js";
import express from "express";

const router = express.Router();

router.get('/', UserController.getAuthenticatedUser);
router.post('/cadastrar/', UserController.createUser);
router.post("/login", UserController.loginUser)
router.post("/logout", UserController.logoutUser)

export default router;