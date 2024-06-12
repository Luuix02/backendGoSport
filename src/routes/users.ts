import { Router } from "express";

const router = Router();
router.get("/usuario", (req, res) => {
  res.send({ data: "AQUI_VAN_MODELS" });
});

export { router };
