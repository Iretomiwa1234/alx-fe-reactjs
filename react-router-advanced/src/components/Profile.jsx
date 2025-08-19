import { Routes, Route, Link } from "react-router-dom";

// Dummy nested components
function ProfileDetails() {
  return <h2>Profile Details Page</h2>;
}

function ProfileSettings() {
  return <h2>Profile Settings Page</h2>;
}

export default function Profile() {
  return (
    <div>
      <h1>My Profile</h1>
      
      {/* Navigation for nested routes */}
      <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested Routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}
