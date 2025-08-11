import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import data from '../data.json'; // Your recipe list

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = data.find((item) => item.id.toString() === id);
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-500">Recipe not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-light min-h-screen p-6">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-block mb-6 text-accent hover:underline"
      >
        ← Back to Home
      </Link>

      {/* Recipe Image */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-64 object-cover"
        />

        {/* Recipe Info */}
        <div className="p-6">
          <h1 className="text-3xl font-bold text-secondary mb-4">
            {recipe.title}
          </h1>
          <p className="text-gray-600 mb-6">{recipe.summary}</p>

          {/* Ingredients */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-3">
              Ingredients
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </section>

          {/* Instructions */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">
              Cooking Instructions
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
