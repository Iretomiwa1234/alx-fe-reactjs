import { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    let formErrors = {};
    if (!title.trim()) formErrors.title = "Title is required";
    if (!ingredients.trim()) {
      formErrors.ingredients = "Ingredients are required";
    } else if (ingredients.split(",").length < 2) {
      formErrors.ingredients = "Please list at least two ingredients (comma-separated)";
    }
    if (!steps.trim()) formErrors.steps = "Preparation steps are required";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Simulate saving recipe
    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split(",").map((ing) => ing.trim()),
      steps,
    };
    console.log("Recipe submitted:", newRecipe);

    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
    setSuccessMessage("Recipe added successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-secondary">Add a New Recipe</h2>

      {successMessage && (
        <p className="mb-4 text-green-600 font-medium">{successMessage}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block font-semibold mb-1 text-text">Recipe Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-semibold mb-1 text-text">Ingredients</label>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="List ingredients, separated by commas"
            rows={4}
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block font-semibold mb-1 text-text">Preparation Steps</label>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="Describe the cooking process"
            rows={6}
          ></textarea>
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded hover:bg-accent transition"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
}
