import express from "express";
import { RatingController } from "../controller/rating.controller";

const router = express.Router();

router.get("/ratings", RatingController.getRatings);
router.post("/ratings", RatingController.createRating);
router.put("/ratings", RatingController.updateRating);

router.get("/options");

export { router };
