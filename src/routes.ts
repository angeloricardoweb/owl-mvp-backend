import { Router } from "express";
import { CreateUserController } from "./app/controllers/user/CreateUserController";
import { ListUsersController } from "./app/controllers/user/ListUsersController";
import { CreateProjectController } from "./app/controllers/project/CreateProjectController";
import { ListProjectController } from "./app/controllers/project/ListProjectController";
import { CreateProjectTimeController } from "./app/controllers/project-time/CreateProjectTimeController";
import { ListProjectTimeController } from "./app/controllers/project-time/ListProjectTimeController";
import { GetProjectTimeByProject } from "./app/controllers/project-time/GetProjectTimeByProject";
import { CreateStackController } from "./app/controllers/stack/CreateStackController";
import { ListStackController } from "./app/controllers/stack/ListStackController";

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const createProjectController = new CreateProjectController();
const listProjectController = new ListProjectController();
const createProjectTimeController = new CreateProjectTimeController();
const getProjectTimeByProject = new GetProjectTimeByProject();
const listProjectTimeController = new ListProjectTimeController();
const createStackController = new CreateStackController();
const listStackController = new ListStackController();

const router = Router();

router.get("/api/v1", (req, res) => {
  res.json({ server: "online" });
});

router.post("/api/v1/user", createUserController.handle);
router.get("/api/v1/user", listUsersController.handle);

router.post("/api/v1/project", createProjectController.handle);
router.get("/api/v1/project", listProjectController.handle);

router.post("/api/v1/projectTime", createProjectTimeController.handle);
router.get("/api/v1/projectTime", listProjectTimeController.handle);
router.get("/api/v1/projectTime/:id", getProjectTimeByProject.handle);

router.post("/api/v1/stack", createStackController.handle);
router.get("/api/v1/stack", listStackController.handle);

export { router };
