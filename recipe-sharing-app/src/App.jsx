import { Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

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
              <hr />
              <RecipeList />
            </>
          }
        />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
