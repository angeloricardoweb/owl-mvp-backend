import { Router } from "express";
import { CreateUserController } from "./app/controllers/user/CreateUserController";
import { ListUsersController } from "./app/controllers/user/ListUsersController";
import { CreateProjectController } from "./app/controllers/project/CreateProjectController";
import { CreateProjectTimeController } from "./app/controllers/project-time/CreateProjectTimeController";
import { CreateStackController } from "./app/controllers/stack/CreateStackController";

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const createProjectController = new CreateProjectController();
const createProjectTimeController = new CreateProjectTimeController();
const createStackController = new CreateStackController();

const router = Router();

router.get("/api/v1", (req, res) => {
  res.json({ server: "online" });
});

router.post("/api/v1/user", createUserController.handle);
router.get("/api/v1/user", listUsersController.handle);

router.post("/api/v1/project", createProjectController.handle);

router.post("/api/v1/projectTime", createProjectTimeController.handle);

router.post("/api/v1/stack", createStackController.handle);

export { router };
