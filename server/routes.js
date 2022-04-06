import express from "express";
import InfoReqController from "./api/infoReq.controller.js"

const router = express.Router();

router
  .route("/send_info_request")
  .post(InfoReqController.emailSendInfoRequest);

router
  .route("/send_info_recap")
  .post(InfoReqController.emailSendInfoRecap);

export default router;
