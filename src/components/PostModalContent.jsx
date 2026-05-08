import { useEffect, useState } from "react";

export default function PostModalContent({ id }) {
  const [post, setPost] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
        );
        if (!res.ok) throw new Error("error");
        const date = await res.json("");

        setPost(date);
      } catch (error) {
        setError(error.message || "error");
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  return (
    <>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {isLoading ? (
        <p style={{ textAlign: "center", marginTop: "1rem" }}>Loading...</p>
      ) : (
        post && (
          <div>
            <h2 className="modal_title">{post.title}</h2>
            <p className="modal_description">{post.body}</p>
          </div>
        )
      )}
    </>
  );
}
