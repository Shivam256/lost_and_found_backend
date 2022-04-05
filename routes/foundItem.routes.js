import express from "express";
const router = express.Router();

import { isLoggedIn } from "../middlewares.js";

import {
  postFoundItem,
  getAllFoundItems,
  getOneFoundItem
} from "../controllers/foundItem.controller.js";

router
  .route("/")
  .post(isLoggedIn, postFoundItem)
  .get(isLoggedIn, getAllFoundItems);

router.route('/:id').get(isLoggedIn,getOneFoundItem);

export default router;
