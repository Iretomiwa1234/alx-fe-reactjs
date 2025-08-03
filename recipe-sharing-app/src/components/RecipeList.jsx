import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  return (
    <div>
      <h2>Recipe List</h2>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        filteredRecipes.map((recipe) => {
          const isFav = favorites.includes(recipe.id);
          return (
            <div key={recipe.id} style={{ marginBottom: '1rem' }}>
              <h3>
                <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
              </h3>
              <p>{recipe.description}</p>
              <button onClick={() => isFav ? removeFavorite(recipe.id) : addFavorite(recipe.id)}>
                {isFav ? 'Unfavorite' : 'Favorite'}
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default RecipeList;
