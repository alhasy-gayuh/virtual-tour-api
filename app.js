import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import adminRoute from "./routes/adminRoute.js";
import destinationRoute from "./routes/destinationRoute.js";
import postRoute from "./routes/postRoute.js";

const app = express();
const port = 5000;

// koneksi ke database
mongoose.connect("mongodb://127.0.0.1:27017/db_tour_api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database berhasil terkoneksi!"));

// middleware
app.use(cors());
app.use(express.json());
app.use("/admin", adminRoute);
app.use("/destination", destinationRoute);
app.use("/post", postRoute);

app.get("/", (req, res) => {
  res.send("Welcome to Virtual Tour");
});

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
