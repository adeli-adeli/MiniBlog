import "./App.css";
import Header from "./components/Header";
import PostsCards from "./components/PostsCards";
import Input from "./components/ui/input";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <main className="main">
          <div className="container">
            <h2>Добро пожаловать в MiniBlog!</h2>

            <Input
              type={"text"}
              className={"search-input"}
              placeholder={"Найдите свой пост"}
            />

            <PostsCards />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
