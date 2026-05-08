import Button from "./ui/button";

export default function PostCard({ post, onClick }) {
  const { title, body } = post;
  return (
    <>
      <article className="post-card">
        <h3 className="post-title">{title}</h3>
        <p className="post-content">{body.slice(0, 50)}...</p>
        <Button className="post_btn" onClick={onClick}>
          Read more
        </Button>
      </article>
    </>
  );
}
