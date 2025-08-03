import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',
  favorites: [],
  recommendations: [],

  addRecipe: (newRecipe) =>
    set((state) => {
      const updated = [...state.recipes, newRecipe];
      return {
        recipes: updated,
        filteredRecipes: filterWithTerm(updated, state.searchTerm),
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updated = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: updated,
        filteredRecipes: filterWithTerm(updated, state.searchTerm),
        favorites: state.favorites.filter((fid) => fid !== id),
      };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updated = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      );
      return {
        recipes: updated,
        filteredRecipes: filterWithTerm(updated, state.searchTerm),
      };
    }),

  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: filterWithTerm(state.recipes, term),
    })),

  setRecipes: (recipes) =>
    set((state) => ({
      recipes,
      filteredRecipes: filterWithTerm(recipes, state.searchTerm),
    })),

  addFavorite: (id) =>
    set((state) =>
      state.favorites.includes(id)
        ? {}
        : { favorites: [...state.favorites, id] }
    ),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((fid) => fid !== id),
    })),

  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      (r) =>
        !favorites.includes(r.id) && // not already a favorite
        favorites.some((fid) => r.title.includes(get().recipes.find(rr => rr.id === fid)?.title.slice(0, 3))) // loose matching
    );
    set({ recommendations: recommended.slice(0, 3) });
  },
}));

function filterWithTerm(recipes, term) {
  return recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(term.toLowerCase())
  );
}
