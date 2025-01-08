import mongoose from "mongoose";

const recipesSchema = mongoose.Schema({
  name: String,
  ingredient: [String],
  procedure: String,
  duration: String,
});

const recipes = mongoose.model("recipes", recipesSchema);

export default recipes;
