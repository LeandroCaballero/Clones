import { Router } from "express";
import { login, register } from "./src/controllers/auth.controller";
import { getAllUsers } from "./src/controllers/users.controller";
import { saveMessage } from "./src/controllers/message.controller";
import { createChat } from "./src/controllers/chat.controller";
// import { verifyToken } from "../middleware/auth"

const router = Router();

// router.get(["/", "/test/:name"], (req, res) => {
//   let greeting = "<h1>Hello From Node with Express!</h1>";
//   let name = req.params["name"];
//   if (name) {
//     res.send(greeting + "</br>and hello to " + name);
//   } else {
//     res.send(greeting);
//   }
// });

router.get("/users", getAllUsers);

router.post("/login", login);
router.post("/register", register);

//chat
router.post("/newChat", createChat);

// Messages
// router.post("/newMessage", saveMessage);
// router.get("/status", getStatus);

export default router;
