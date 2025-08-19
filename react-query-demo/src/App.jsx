import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from "./components/PostsComponent.jsx";
// If you installed devtools:
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Good defaults for demos
      staleTime: 60 * 1000,          // data considered fresh for 60s
      cacheTime: 5 * 60 * 1000,      // unused cache kept for 5 mins
      refetchOnWindowFocus: false,   // don’t spam refetch on tab focus
      retry: 1,
    },
  },
});

export default function App() {
  // simple toggle to “navigate away and back” to demo caching
  const [showPosts, setShowPosts] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: 16 }}>
        <h1>React Query Demo — Posts</h1>

        <div style={{ marginBottom: 12 }}>
          <button onClick={() => setShowPosts((s) => !s)}>
            {showPosts ? "Hide Posts (simulate leave)" : "Show Posts (return)"}
          </button>
        </div>

        {showPosts ? <PostsComponent /> : <p>Posts hidden. Toggle to come back.</p>}
      </div>

      {/* Devtools (optional) */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
