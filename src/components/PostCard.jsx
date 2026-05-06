export default function PostCard({ key, title, content }) {
  return (
    <>
      <article className="post-card" key={key}>
        <h3 className="post-title">{title}</h3>
        <p className="post-content">{content}</p>
      </article>
    </>
  );
}
