import posts from "../store";
import PostCard from "./PostCard";

export default function PostsCards() {
  return (
    <>
       <div className="posts">
              {posts.map((post) => (
                <PostCard key={post.id} title={post.title} content={post.content}/>
              ))}
        </div>
    </>
  )
}
