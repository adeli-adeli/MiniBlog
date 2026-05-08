import "./App.css";
import Header from "./components/Header";
import PostsCards from "./components/PostsCards";

function App() {
  // console.log('---render app')

  return (
    <>
      <div className="app">
        <Header />
        <main className="main">
          <PostsCards />
        </main>
      </div>
    </>
  );
}

export default App;
