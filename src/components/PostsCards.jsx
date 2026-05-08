import { useEffect, useMemo, useState } from "react";
import PostCard from "./PostCard";
import Input from "./ui/Input";
import Modal from "./ui/Modal";
import PostModalContent from "./PostModalContent";

export default function PostsCards() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [selectedPost, setSelectedPost] = useState(null);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!res.ok) throw new Error("error");

        const data = await res.json();

        setPosts(data);
      } catch (error) {
        setError(error.message || "error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  //фильтр срабатывает при изменении search или исходных данных posts
  const filteredPosts = useMemo(() => {
    return posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [posts, search]);

  return (
    <>
      <div className="container">
        <h2>Добро пожаловать в MiniBlog!</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <Input
          type={"text"}
          className={"search-input"}
          placeholder={"Найдите свой пост"}
          value={search}
          onChange={handleInput}
        />

        <div className="posts">
          {filteredPosts.length === 0 && !isLoading && (
            <p style={{ textAlign: "center", marginTop: "1rem" }}>No posts</p>
          )}
          {isLoading ? (
            <p style={{ textAlign: "center", marginTop: "1rem" }}>Loading...</p>
          ) : (
            filteredPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onClick={() => setSelectedPost(post)}
              />
            ))
          )}

          {selectedPost && (
            <Modal onClose={()=> setSelectedPost(null)}>
              <PostModalContent id={selectedPost.id} />
            </Modal>
          )}
        </div>
      </div>
    </>
  );
}
