import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter } from "react-router-dom";
import BlogPost from "./pages/BlogPost"; 

export default function App() {
  return (
    <BrowserRouter>
    <div>
      <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Blog with dynamic post routes */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} /> {/* ✅ fixed */}

        {/* Protected Profile with nested routes */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
    </BrowserRouter>
  );
}
