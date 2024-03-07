import express from "express";
import postApply from "../controllers/applyController.js";

const router = express.Router();

router.route("/")
      .post(postApply);

export default router;
