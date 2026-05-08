import Button from "./ui/button";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <h1 className="logo">MiniBlog</h1>
          <nav className="nav">
            <ul className="list">
              <li className="list-item">
                <a href="#home">Home</a>
              </li>
              <li className="list-item">
                <a href="#posts">Posts</a>
              </li>
              <li className="list-item">
                <a href="#about">About</a>
              </li>
              <li className="list-item">
                <a href="#submit">Submit</a>
              </li>
            </ul>
          </nav>
          <Button className="button">Dark Mode</Button>
        </div>
      </header>
    </>
  );
}
