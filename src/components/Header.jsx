import Button from "./ui/Button";
import useTheme from "./hooks/useTheme";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <header className={`header ${theme}`}>
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
          <Button
            className={`button ${theme === "theme-light" ? "theme-dark" : "theme-light"}`}
            onClick={toggleTheme}
          >
            {theme === "theme-light" ? "Dark Mode" : "Light Mode"}
          </Button>
        </div>
      </header>
    </>
  );
}
