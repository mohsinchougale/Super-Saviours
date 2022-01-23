import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";
import axios from "axios";
import policeRouter from "./routes/police.js";
import hospitalRouter from "./routes/hospital.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running at ${PORT}`));

app.use(express.json());
app.use(cors());

app.use("/user", userRoutes);
app.use("/police", policeRouter);
app.use("/hospital", hospitalRouter);

const accountSid = process.env.SID;
const authToken = process.env.AUTH_TOKEN;

// const client = require("twilio")(accountSid, authToken);
// client.messages
//   .create({
//     body: "Hello00",
//     from: "+16165458834",
//     to: "+15417083275",
//   })
//   .then((message) => console.log(message.sid));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDb connected"))
  .catch((error) => console.error(error));
