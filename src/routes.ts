import { Router } from "express";
import { CreateUserController } from "./app/controllers/user/CreateUserController";
import { ShowUsersController } from "./app/controllers/user/ShowUsersControlle";

const createUserController = new CreateUserController();
const showUsersController = new ShowUsersController();

const router = Router();

router.get("/api/v1", (req, res) => {
  res.json({ server: "online" });
});

router.post("/api/v1/user", createUserController.handle);
router.get("/api/v1/user", showUsersController.handle);

export { router };
