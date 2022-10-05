import express from "express";
import { RatingController } from "../controller/rating.controller";

const router = express.Router();

router.get("/rating", RatingController.getRatings);
router.post("/rating", RatingController.createRating);
router.put("/rating", RatingController.updateRating);

router.get("/rating/:field/:condition/:value", RatingController.getFilterRating);

export { router };
