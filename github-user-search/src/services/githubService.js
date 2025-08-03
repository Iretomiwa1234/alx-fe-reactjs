// src/services/githubService.js

import axios from "axios";

const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const searchUsers = async ({ username, location, minRepos }) => {
  let query = "";

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=10`;

  const response = await axios.get(url, {
    headers: {
      Authorization: `token ${GITHUB_API_KEY}`,
    },
  });

  return response.data;
};
