const baseURL = import.meta.env.VITE_APP_GITHUB_API_URL;
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchUser = (username) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${baseURL}/users/${username}`);
        setUser(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchUser();
    }
  }, [username]);

  return { user, loading, error };
};

export default useFetchUser;