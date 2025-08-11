import { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title.trim() || !ingredients.trim() || !steps.trim()) {
      setError("All fields are required.");
      return;
    }

    const ingredientList = ingredients.split(",").map((i) => i.trim());
    if (ingredientList.length < 2) {
      setError("Please list at least two ingredients, separated by commas.");
      return;
    }

    setError("");
    console.log({
      title,
      ingredients: ingredientList,
      steps,
    });

    // Reset form after submission
    setTitle("");
    setIngredients("");
    setSteps("");
    alert("Recipe submitted successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-light rounded-lg shadow-md m-10">
      <h1 className="text-2xl font-bold text-secondary mb-6">
        Add a New Recipe
      </h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-text mb-1">
            Recipe Title
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="e.g., Chocolate Cake"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-sm font-medium text-text mb-1">
            Ingredients (separated by commas)
          </label>
          <textarea
            rows="4"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Flour, Sugar, Eggs, Butter"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </div>

        {/* Steps */}
        <div>
          <label className="block text-sm font-medium text-text mb-1">
            Preparation Steps
          </label>
          <textarea
            rows="5"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Step 1: Preheat the oven..."
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <button
            type="submit"
            className="px-6 py-2 rounded-lg hover:bg-accent transition bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
}
