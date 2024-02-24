import express, { json } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import expensesroutes from "./routes/expenses.routes.js";
import cors from "cors";
dotenv.config({
  path: "./.env",
});

const app = express();

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());

// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: "http://localhost:5555",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.use(express.json());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(200).send("Welcome to my Server");
});

app.use("/expense", expensesroutes);

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("App Connected to DataBase");
  app
    .listen(process.env.PORT, () => {
      console.log(`⚙️   Server is running at port : ${process.env.PORT}`);
    })
    .on("error", (err) => {
      console.error("Error starting server:", err);
    });
});
