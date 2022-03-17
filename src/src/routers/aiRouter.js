import express from "express"
import { getAiPage, postAiPage } from "../controller/aiController";

const aiRouter = express.Router();

aiRouter.route("").get(getAiPage).post(postAiPage);

export default aiRouter;