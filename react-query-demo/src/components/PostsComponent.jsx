import React from "react";
import { useQuery } from "react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

export default function PostsComponent() {
  const {
    data,
    error,
    isLoading,
    isFetching,
    refetch,
    isError,
  } = useQuery(["posts"], fetchPosts);

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  return (
    <div>
      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12 }}>
        <button onClick={() => refetch()}>
          Refetch Posts
        </button>
        {isFetching && <span>Refreshing…</span>}
      </div>

      <ul style={{ paddingLeft: 18 }}>
        {data.slice(0, 10).map((post) => (
          <li key={post.id} style={{ marginBottom: 8 }}>
            <strong>{post.title}</strong>
            <div>{post.body}</div>
          </li>
        ))}
      </ul>
      <p style={{ opacity: 0.7, marginTop: 12 }}>
        Showing first 10 for brevity (total: {data.length})
      </p>
    </div>
  );
}
