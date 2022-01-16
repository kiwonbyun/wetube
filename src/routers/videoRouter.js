import express from "express";
import {
  see,
  edit,
  upload,
  deletevideo,
  watch,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)", watch);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deletevideo);

export default videoRouter;
