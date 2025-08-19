// src/pages/BlogPost.jsx
import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams(); // get the :id from URL

  return (
    <div>
      <h2>Blog Post</h2>
      <p>You are viewing post with ID: <strong>{id}</strong></p>
    </div>
  );
}
