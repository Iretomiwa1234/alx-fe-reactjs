import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1><Link to="/">Recipe Sharing App</Link></h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />
              <SearchBar />
              <hr />
              <RecipeList />
              <hr />
              <FavoritesList />
              <hr />
              <RecommendationsList />
            </>
          }
        />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}
