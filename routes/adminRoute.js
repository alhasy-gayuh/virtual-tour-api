import express from "express";
import {
  getAdmins,
  createAdmin,
  getAdminById,
  updateAdmin,
  deleteAdmin,
} from "../controllers/AdminController.js";

const router = express.Router();

// get data admin
router.get("/", getAdmins);
router.post("/", createAdmin);
router.get("/:id", getAdminById);
router.patch("/:id", updateAdmin);
router.delete("/:id", deleteAdmin);

export default router;
