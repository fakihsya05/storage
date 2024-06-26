import categories from "../models/CategoriesModels.js";

export const getAllCategories = async (req, res) => {
  try {
    const response = await categories.findAll();
    res.json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
