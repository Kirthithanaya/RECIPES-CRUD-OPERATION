import recipes from "../Models/recipesSchema.js";

//Post Method
export const createRecipes = async (req, res) => {
  try {
    const recipe = new recipes(req.body);
    await recipe.save();
    res
      .status(200)
      .json({ message: "Recipes Added Successfully", data: recipe });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//Get Method
export const getAllRecipes = async (req, res) => {
  try {
    const getRecipe = await recipes.find();
    res
      .status(200)
      .json({ message: "Recipes Retrieved Successfully", data: getRecipe });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//Get By Id Method
export const getRecipeByID = async (req, res) => {
  try {
    const recipeId = req.params.id;
    const recipe = await recipes.findById(recipeId);
    if (!recipe) {
      return res.status(404).json({ message: "Recipes Not Found" });
    }
    res
      .status(200)
      .json({ message: "Recipes Retrieved Successfully", data: recipe });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//Update Method
export const updateRecipe = async (req, res) => {
  try {
    const recipeId = req.params.id;
    const { name, procedure, ingredients, duration } = req.body;
    const result = await recipes.findByIdAndUpdate(
      { _id: recipeId },
      { name, procedure, ingredients, duration },
      { new: true }
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Recipes Not Found" });
    }

    res.status(200).json({ message: "Rcipes Updated", data: result });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//Delete Method
export const deleterecipe = async (req, res) => {
  try {
    const recipeId = req.params.id;
    const result = await recipes.findByIdAndDelete({ _id: recipeId });
    if (!result) {
      return res.status(404).json({ message: "Recipes Not Found" });
    }
    const recipe = await recipes.find();
    res
      .status(200)
      .json({ message: "Recipes deleted Successfully", data: recipe });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
