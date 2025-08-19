import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  // fake login state (change to true to simulate logged-in)
  const isAuthenticated = true; 

  return isAuthenticated ? children : <Navigate to="/" replace />;
}
