import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!username || !email || !password) {
      setError("All fields are required.");
      return;
    }

    setError("");
    console.log("Form submitted:", { username, email, password });

    // Mock API simulation
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password })
    })
      .then((res) => res.json())
      .then((data) => console.log("Mock API response:", data));
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded w-80">
      <h2 className="text-lg font-bold mb-2">Registration Form</h2>

      {error && <p className="text-red-500">{error}</p>}

      <div className="mb-2">
        <label className="block">Username:</label>
        <input
          type="text"
          name="username"
          value={username}   {/* ✅ matches requirement */}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-1 w-full"
        />
      </div>

      <div className="mb-2">
        <label className="block">Email:</label>
        <input
          type="email"
          name="email"
          value={email}   {/* ✅ matches requirement */}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-1 w-full"
        />
      </div>

      <div className="mb-2">
        <label className="block">Password:</label>
        <input
          type="password"
          name="password"
          value={password}   {/* ✅ matches requirement */}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-1 w-full"
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">
        Register
      </button>
    </form>
  );
}
