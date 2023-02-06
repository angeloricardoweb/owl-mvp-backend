import { Router } from "express";
import { CreateUserController } from "./app/controllers/user/CreateUserController";
import { CreateProjectController } from "./app/controllers/project/CreateProjectController";
import { CreateProjectTimeController } from "./app/controllers/project-time/CreateProjectTimeController";

const createUserController = new CreateUserController();
const createProjectController = new CreateProjectController();
const createProjectTimeController = new CreateProjectTimeController();

const router = Router();

router.get("/api/v1", (req, res) => {
  res.json({ server: "online" });
});

router.post("/api/v1/user", createUserController.handle);
router.post("/api/v1/project", createProjectController.handle);
router.post("/api/v1/projectTime", createProjectTimeController.handle);

export { router };
