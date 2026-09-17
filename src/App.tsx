import Header from "./components/Header";
import PostList from "./components/PostList";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <section>
          <h2>Welcome to Dev Insights</h2>
          <p>
            A place for developers to share quick tips, insights, and updates.
          </p>
        </section>

        <PostList />
      </main>
    </>
  );
}

export default App;