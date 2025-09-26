import express, { type Request, type Response } from "express";
import cors from "cors";
import { PORT, FRONTEND_URL } from "./config/env";

// import routers
import authRouter from "./routes/auth.routes";
import roomRouter from "./routes/room.routes";
import canvasRouter from "./routes/canvas.routes";

const app = express();

// Middleware
app.use(
  cors({
    origin: ["http://localhost:3000", FRONTEND_URL],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// Routes
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Welcome to COSKETCH!",
  });
});

app.use("/auth", authRouter);
app.use("/room", roomRouter);
app.use("/canvas", canvasRouter);

app.listen(PORT, () => {
  console.log(`[ server ] is listening on : http://localhost:${PORT}`);
});
