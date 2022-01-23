import express from "express";
import { signin, signup } from "../controllers/user.js";
import axios from "axios";
import User from "../models/user.js";
const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);

router.patch("/:email", async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { email: req.params.email },
      req.body,
      { new: true }
    );
    res.send(updatedUser);
  } catch (e) {
    console.log(e);
  }
});

export default router;
