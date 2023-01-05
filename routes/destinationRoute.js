import express from "express";
import {
  getDestinations,
  createDestination,
  getDestinationById,
  updateDestination,
  deleteDestination,
} from "../controllers/DestinationController.js";

const router = express.Router();

// get data admin
router.get("/", getDestinations);
router.post("/", createDestination);
router.get("/:id", getDestinationById);
router.patch("/:id", updateDestination);
router.delete("/:id", deleteDestination);

export default router;
