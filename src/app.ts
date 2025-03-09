import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import { connectToMongoDB } from "./mongo";
import userRoutes from "./routes/user.routes";
import * as middlewares from "./middlewares";

require("dotenv").config();

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

connectToMongoDB();

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
