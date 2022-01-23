import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running at ${PORT}`));

app.use(express.json());
app.use(cors());

app.use("/user", userRoutes);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDb connected"))
  .catch((error) => console.error(error));
