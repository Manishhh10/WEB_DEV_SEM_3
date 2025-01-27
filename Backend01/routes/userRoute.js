import express from "express"
import{getAllEmployee, saveAllEmployee} from "../controller/userController.js"

export const router = express.Router();

router.get("/users", getAllEmployee);
router.post("/users", saveAllEmployee);

