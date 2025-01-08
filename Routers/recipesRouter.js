import express from "express";
import {
  createRecipes,
  deleterecipe,
  getAllRecipes,
  getRecipeByID,
  updateRecipe,
} from "../Controllers/recipesControllers.js";

const router = express.Router();

router.post("/create", createRecipes);
router.get("/getdata", getAllRecipes);
router.get("/getdata/:id", getRecipeByID);
router.put("/update/:id", updateRecipe);
router.delete("/delete", deleterecipe);

export default router;
