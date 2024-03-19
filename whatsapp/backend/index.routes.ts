import { Router } from "express";
import { getStatus, login, register } from "./src/controllers/auth.controller";
import { getAllUsers } from "./src/controllers/users.controller";
import { createChat, getAllChat } from "./src/controllers/chat.controller";
// import { verifyToken } from "../middleware/auth"

const router = Router();

router.get("/users", getAllUsers);

// Chat
// router.post("/new-chat", createChat);
router.get("/chats/:id", getAllChat);

// Messages
// router.post("/newMessage", saveMessage);

// Auth
router.get("/status", getStatus);
router.post("/login", login);
router.post("/register", register);

export default router;
