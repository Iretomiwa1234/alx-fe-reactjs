
import React, { useState } from "react";
import { searchUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setResults([]);

    try {
      const data = await searchUsers({ username, location, minRepos });
      setResults(data.items);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <form
        onSubmit={handleSearch}
        className="bg-white shadow-lg rounded-xl px-8 py-6 mb-8"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Advanced GitHub User Search
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="GitHub Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="number"
            placeholder="Minimum Public Repositories"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Search
          </button>
        </div>
      </form>

      {loading && <p className="text-center text-gray-500"> Searching...</p>}

      {error && (
        <p className="text-center text-red-500">
          ❌ Could not fetch users. Please try again.
        </p>
      )}

      <div className="grid gap-6">
        {results.map((user) => (
          <div
            key={user.id}
            className="flex items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full border border-gray-300"
            />
            <div className="ml-4">
              <p className="text-lg font-medium text-gray-800">{user.login}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
