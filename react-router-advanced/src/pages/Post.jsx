import { useParams } from "react-router-dom";

export default function Post() {
  const { id } = useParams();
  return <h3>Showing Blog Post ID: {id}</h3>;
}
