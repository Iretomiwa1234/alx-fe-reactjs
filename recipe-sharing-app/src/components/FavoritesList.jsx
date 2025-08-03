import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  // const favorites = useRecipeStore((state) =>
  //   state.favorites.map((id) => state.recipes.find((r) => r.id === id))
  // );
  // const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const favoritesIds = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const favoriteRecipes = favoritesIds.map((id) =>
  recipes.find((r) => r.id === id)
);

  return (
    <div>
  <h2>My Favorites</h2>
  {favoriteRecipes.length === 0 ? (
    <p>No favorite recipes yet.</p>
  ) : (
    favoriteRecipes.map((recipe) =>
      recipe ? (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => removeFavorite(recipe.id)}>Remove</button>
        </div>
      ) : null
    )
  )}
</div>

  );
};

export default FavoritesList;
