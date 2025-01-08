import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/dbConfig.js";
import recipesRouter from './Routers/recipesRouter.js'




//Dotenv Config
dotenv.config();

//Initialize
const app = express();

//Cors Middleware
app.use(cors());

connectDB();

//Defaul Middleware For req.body
app.use(express.json());

//Default route for cannot get
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Our Api");
});

//custom route
app.use('/api/recipes',recipesRouter)
//Port Declare
const port = process.env.PORT || 4000;

//Started The Server
app.listen(port, () => {
  console.log("Strated Server");
});
